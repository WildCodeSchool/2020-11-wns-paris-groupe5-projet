import axios from 'axios';

export async function login(data) {
	try {
		const res = await axios.post("http://localhost:3000/api/user/login", data);

		return res.data;
	} catch (e) {
		console.error(e);
	}
}
export async function studentList(data) {
	try {
		const res = await axios.get("http://localhost:3000/api/students", data);
		
		return res.data;
	} catch (e) {
		console.error(e);
	}
}

export const sendEmail = async (email) => {
    try {
      const res = await axios.post("http://localhost:3000/api/student/sendEmail",
        {
          to: email,
          subject: "Retard",
          text: "Hello, tu es en retard pour le cours !"
        });
        console.log("res data", res.data)
        return res.data;
    } catch (e) {
      console.log("error, error", e)
    }
  };

  export async function sendSMS(id) {
    try {
      	const res = await axios.post("http://localhost:3000/api/student/sendSms",  id);
		return res.data;
    } catch (e) {
      console.log("error, error");
    }
  };