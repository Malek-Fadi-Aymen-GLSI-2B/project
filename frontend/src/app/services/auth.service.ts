import { User } from "../model/user.model";

export class AuthService {

    users : User[] = [{firstName: 'Admin', lastName: 'Admin', phoneNumber: '52534111', email: 'admin', password: 'admin', role: ['admin']},
                    {firstName: 'Malek', lastName: 'Gasmi', phoneNumber: '12345678', email: 'malek@gmail.com', password: 'malek123', role: ['user']}];
    isAuth = false;
    loggerUser : string;
    roles : string[];


    signIn(user : User) {
        let validUser : boolean = false;
        this.users.forEach((cursor) => {
            if(user.email == cursor.email && user.password == cursor.password) {
                validUser = true;
                this.loggerUser = cursor.firstName + " " + cursor.lastName;
                this.isAuth = true;
                this.roles = cursor.role;
            }
        })
        return this.isAuth;
    }

    signOut() {
        this.isAuth = false;
        window.location.reload(); 
    }

    isAdmin() : boolean  {
        if(!this.roles) 
            return false;
        return (this.roles.indexOf('admin') > -1);
    }
}