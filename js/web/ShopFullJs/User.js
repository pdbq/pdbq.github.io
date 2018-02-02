class User
{
	constructor()
	{
		this.price = 0;
		this.date = {
			fullname: undefined,
			phone: undefined,
			email: undefined,
			price: this.price
		};
	}
	update(price = 0)
	{
		return this.price += price;
	}
	dataUser(param)
	{
		this.date = {
			fullname: param.fullname,
			phone: param.phone,
			email: param.email,
			price: this.price
		};
		var ok = false;
		if(this.date.fullname && this.date.phone && this.date.email && this.date.price)
			ok = true;
		console.log(this.date);
		return ok;
	}
	sendDate()
	{
		console.log(this.date);
	}
}