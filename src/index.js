const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class Spell extends LIBRARIES.Skill {
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("Spell.spellAWord", function(_intent, _socket){
      _intent.Variables.text = _intent.Variables.word.split("").join(",").toUpperCase();
      _intent.answer(_socket);
    });
  }
}

module.exports = Spell;
