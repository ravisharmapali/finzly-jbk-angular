export class Customer{
    id : number;
    name : string;
    email : string;

    constructor(id:number, name:string , email:string){
        this.id = id; 
        this.name= name;
        this.email= email;
    }

    public showData(){
        console.log(`
            Id : ${this.id}
            Name : ${this.name}
            Email : ${this.email}
        `);
    }
};

let cust1 = new Customer(111,"ravi","ravi@gmail.com");
cust1.showData();