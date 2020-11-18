const request = require('request');
const StudentModel = require("../models/Student");
const { sendSingleEmail } = require('../utils/sendEmail');

module.exports = {
  getAllStudents: async (req, res) => {
    console.log("getAllWilders called");
    try {
      const students = await StudentModel.find({});
      res.send(students);
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  create: async (req, res) => {
    try {
      await StudentModel.init();
      const student = new StudentModel(req.body);
      await student.save();
      res.send(student);
    } catch (e) {
      console.log("e", e);
      res.status(500).send();
    }
  },
  sendEmail: async (req, res) => {
    try {
      const response = await sendSingleEmail(req.body);
      console.log("response", response)
      if(response.messageId) {
        res.send({ success: "Message envoyé"});
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
      const student = await StudentModel.findOne({_id:id});
      if(student.phoneNumber) {
        const options = {
          'method': 'POST',
          'url': `https://http-api.d7networks.com/send?username=${process.env.SMS_USER}&password=${process.env.SMS_PASS}&dlr-method=POST&dlr-url=https://4ba60af1.ngrok.io/receive&dlr=yes&dlr-level=3&from=wildCodeSchool&content=Le cours a commencé, tu es en retard &to=${student.phoneNumber}`,
          'headers': {
          },
          formData: {
        
          }
        };

        request(options, function (error, response) {
          if (error) {
            console.log("error sending sms", error)
            res.status(500).send();
          } else {
            console.log("sms succes", response.body);
            res.send({ success: "SmS envoyé"});

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
      const student = await StudentModel.findOneAndDelete({ _id: req.params.id });

      if (!student) {
        res.status(404).send();
      }

      res.send({ student, message: "student deleted" });
    } catch (e) {
      res.status(500).send();
    }
  },
};
