// {
//     //Encapsulation = Kono ekta property bahirer world er kase access na thake , it is done with protected and private 

// }


{
    //Access Modifiers
    class BankAccount {
        //Private property cannot be extended ar baki child gulo access korte parbena , but jodi protected hoi taile instance ar child e access kora jabe

        readonly id:number;
        name:string;
        // convention for private property 
        // private _balance:number; 
        protected _balance:number;

        constructor(id: number, name: string, balance: number){
            this.id= id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

        getBalance(){
            return this._balance;
        }
    }


    class StudentAccount extends BankAccount {
        test(){
            this._balance
        }
    }

    const goribManusherAccount = new BankAccount(11, 'new gorib', 20);
    goribManusherAccount.addDeposit(50);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);

    //
}