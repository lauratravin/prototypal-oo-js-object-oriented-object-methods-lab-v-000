function BoardMember( name, homeState, training ){
  this.name =  name
  this.homeState = homeState
  this.training = training

}
BoardMember.prototypes.veto= function(){
  return 'No, I must disagree'
}
