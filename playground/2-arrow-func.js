const event = {
  name:"birthday party",
  guestList: ["alonso", "Robervaldo", "Durrl"],
  printGuestList(){
    console.log("Guest list for" + this.name)
    this.guestList.forEach((guest)=>{
      console.log(guest + " is attending " + this.name)
    })
  }
}
event.printGuestList()