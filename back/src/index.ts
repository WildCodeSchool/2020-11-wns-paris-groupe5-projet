import { app } from "./app";
import { start } from "./db/mongoose";
start();
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
