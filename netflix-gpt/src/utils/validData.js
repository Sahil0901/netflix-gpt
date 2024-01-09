export const validData = (email, password)=>{
    const isEmailValid = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&* ()-+=^])(?=\S+$).{8,20}$/.test(password);

    // const isNameValid = /^(?!.{51})[a-zA-Z-]+(?: [a-zA-Z]+(?: [a-zA-Z-]+)?)?$/.test(name);

    if(!isEmailValid) return "Invalid email address! Please enter again."
    if(!isPasswordValid) return "Invalid password! Please enter again."
    // if(!isNameValid) return "Invalid name! Please enter again."

    return null;
}