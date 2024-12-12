export const{username,password}=process.env
console.log(username,password);

export const connecturi="mongodb+srv://"+username+":"+password+"@cluster0.3k136.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

console.log(username,password);