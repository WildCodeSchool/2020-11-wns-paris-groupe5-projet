const request = require("request");
const UserModel = require("../models/User");
const { sendSingleEmail } = require("../utils/sendEmail");
const StudentPresenceModel = require("../models/StudentPresence");

module.exports = {
  welcomeRoute: async (req, res) => {
    console.log("welcomeRoute called");
    try {
      res.send({ message: "Welcome to RunSchool api" });
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  getAllStudents: async (req, res) => {
    console.log("getAllWilders called");
    try {
      const students = await UserModel.find({});
      res.send(students);
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  create: async (req, res) => {
    try {
      await UserModel.init();
      const user = new UserModel(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (e) {
      console.log("e", e);
      res.status(400).send(e);
    }
  },
  login: async ({ body: { email, password } }, res) => {
    try {
      const user = await UserModel.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.send({ user, token });
    } catch (e) {
      console.log("error***", e);
      res.status(400).send({ error: "error login" });
    }
  },
  sendEmail: async (req, res) => {
    try {
      const response = await sendSingleEmail(req.body);
      if (response.messageId) {
        res.send({ success: "Message envoyé" });
      } else {
        res.status(500).send();
      }
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  sendSms: async (req, res) => {
    try {
      const id = req.body.id;
      const student = await UserModel.findOne({ _id: id });
      if (student.phoneNumber) {
        const options = {
          method: "POST",
          url: `https://http-api.d7networks.com/send?username=${process.env.SMS_USER}&password=${process.env.SMS_PASS}&dlr-method=POST&dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=wildCodeSchool&content=Tu es en retard pour le cours &to=+${student.phoneNumber}`,
          headers: {},
          formData: {},
        };

        request(options, function (error, response) {
          if (error) {
            console.log("error sending sms", error);
            res.status(500).send();
          } else {
            console.log("sms succes", response.body);
            res.send({ success: "SmS envoyé" });
          }
        });
      } else {
        res.status(500).send();
      }
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  delete: async (req, res) => {
    try {
      const student = await UserModel.findOneAndDelete({ _id: req.params.id });

      if (!student) {
        res.status(404).send();
      }

      res.send({ student, message: "student deleted" });
    } catch (e) {
      res.status(500).send();
    }
  },
  update: async (req, res) => {
    try {
      const update = req.body;
      const user = await UserModel.findByIdAndUpdate(req.params.id, { $set: update });

      if (!user) {
        res.status(404).send();
      }

      res.send({ user, message: "student updated" });
    } catch (e) {
      res.status(500).send();
    }
  },
  setStudentsPresence: async (req, res) => {
    try {
      const students = req.body;
      const studentsPresence = new StudentPresenceModel(students);
      await studentsPresence.save();

      res.send({ success: true, message: "list saved" });
    } catch (e) {
      console.log("error saving records", e);
      res.status(500).send();
    }
  },
};
