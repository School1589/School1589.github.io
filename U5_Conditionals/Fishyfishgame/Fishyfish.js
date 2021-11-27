alert("You are a fisherperson on a boat, your goal is to find as many cute fishy fish as possible while avoiding catching none.")

let fishtype = prompt ("Do you want to catch redfishy or catfishy? please type (1) to catch redfishy, or type (2) for catfishy.")

if (fishtype == 1) {
    let method = prompt("Do you want to cast for your fish or troll for fish on the boat? type (1) to cast line or (2) to troll.")
    if(method ==1) {
    let cast_bite = prompt("The top of your reel is lightly bobbing. Do you gently pull up the rod or strongly pull up the rod before you start reeling in your line? Type (1) for gentle and (2) for strong.")
    if(cast_bite ==1) {
        alert("Your fish got away :( game over");
    } else {
        alert ("Fish on! It is a keeper! You win!")
    }    
    } else {
        alert ("Great choice! You caught many fish! You win!")
    }
} else {
    let reel_in = prompt("Do you want to cast and quickly real in or cast, let it sink, and wait? Type (1) to cast and quickly reel in or (2) cast and wait.")
    if(reel_in ==1) {
        alert ("That won't work with catfishy. Game over")
    } else {
        let reel_bob = prompt ("When should you reel in your line? Do you reel it in as soon as the top of the reel bobs lightly or wait until it bobs heavily? Type (1) for lightly or (2) for heavily. ")
        if(reel_bob ==1) {
            alert("The catfishy was just nibbling. Game over") 
        } else {
            alert("Fish on! It is a keeper! You win!")
        }
    }
}
