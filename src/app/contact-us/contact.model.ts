export class ContactModel {
	
				 firstName = "";
				 lastName = "";
				addresses : Address[];
				hobbies:Hobbies[];
	
}

export class Address {
   city ="Malden";
   state= "MA";
   street = "Florence st.";
   pinCode = "273209"

}

export class Hobbies{
  hobby = "Cricket";
}
export const states = ['UP', 'MP','AP', 'HYD']