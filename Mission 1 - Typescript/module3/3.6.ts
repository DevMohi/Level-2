{
    //Getter and Setter
    class BankAccount {

        readonly id:number;
        name:string;
        protected _balance:number;

        constructor(id: number, name: string, balance: number){
            this.id= id;
            this.name = name;
            this._balance = balance;
        }

        // addDeposit(amount: number){
        //     this._balance = this._balance + amount;
        // }

        // With getter 
        get balance(){
            return this._balance;
        }

        //Setter 
        set deposit(amount: number){
            this._balance = this.balance + amount
        }

    }


    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(11, 'new gorib', 30);
    // goribManusherAccount.addDeposit(50); //aikane function hishebe
    goribManusherAccount.deposit = 60; //ar aikane property hishebe using setter 


     
    const myBalance = goribManusherAccount.balance; //this is done as a property instead of a function 
    console.log(myBalance);

    //
}