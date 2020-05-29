const skills_default_attributes = [
    'mind','soul','mind',
    'body','body','body',
    'mind','soul','mind',
    'body','body','body',
    'soul','mind','body',
    'mind','soul','mind',
    'mind','mind','mind',
    'soul','mind','body'
]
const skills = [
    'arcana','devotion','medicine',
    'athletics','dexterity','might',
    'awareness','entertain','nature',
    'ballistic_skill','fortitude','reflexes',
    'beast_handling','guile','stealth',
    'channelling','intimidation','surival',
    'crafting','intuition','theology',
    'determination','lore','weapon_skill'
]
const skills_div_3 = Math.floor(skills.length / 3)
let skills_markup = ''
for (let i = 0; i <= skills_div_3;i++) {
    let current_val = i * 3
    skills_markup += '<tr>\n'
    for (j = current_val;j < current_val+3 && j < skills.length;j++) {
        const skill = skills[j]
        const attribute = skills_default_attributes[j]
        // todo add @{skill_focus} to the rollable
        skills_markup += `\t<td><button class="d6-dice rollmod" type="roll" value="&{template:blue} {{name=${skill}}} {{Roll=[[(@{${attribute}} + @{${skill}_training})d6]]}} {{Focus=@{${skill}_focus}}}" >${skill}</button></td>\n`
        skills_markup += `\t<td><input type="number" name="attr_${skill}_training" class="pipnumber" min="0" max="3" value="0"/></td>\n`
        skills_markup += `\t<td><input type="number" name="attr_${skill}_focus" class="pipnumber" min="0" max="3" value="0"/></td>\n`
    }
    skills_markup += '</tr>\n'
}
console.log(skills_markup)