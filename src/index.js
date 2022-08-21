const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class Spell extends LIBRARIES.Skill {
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("Spell.spell", function(_intent, _socket){
      console.log("gg");
      _intent.Variables.text = _intent.Variables.word.split("").join(" ");
      _intent.answer(_socket);
    });
  }
}

module.exports = Spell;
