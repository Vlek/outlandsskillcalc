/**
 * @class       : app
 * @author      : Derek 'Vlek' McCammond (dmccammond25@gmail.com)
 * @created     : Wednesday Jul 22, 2020 14:41:22 PDT
 * @description : Outlands skill and ability calculator
 * @version     : 0.0.1
 *
 * Roadmap:
 * TODO: Be able to handle single skills and their PvM/PvP dmg increase
 * TODO: Be able to handle abilities and the skill level
 * - Version 1.0.0
 * TODO: Give weapon special chance
 * TODO: Handle abilities requiring multiple skills
 * - Version 1.5.0
 * TODO: Give melee vs archery percentage changes
 * TODO: Add skill-based percentage changes
 * - Version 1.7.0
 * TODO: Give bandage heal amount range
 * TODO: Potion/bandage cure chances
 * TODO: Add weapon hit chance
 * - Version 2.0.0
 * TODO: Ressurection chances
 * TODO: Give bandage times for self/others
 * TODO: Handle PvP damage caps
 * TODO: Add camping carrying weight and capacity percentages
 * - Version 2.5.0
 * TODO: Give animals that can be had as pets
 * TODO: Give taming chance
 * - Version 3.0.0
 * TODO: Give gatherable resources / gather chance
 * TODO: Give item creation chance
 * - Version 4.0.0
 * TODO: Give treasure maps stats w/ carto
 * TODO: Give lockpicking info
 * TODO: Give stealing weights / success chance
 * TODO: Create shareable links
 * - Version 5.0.0
 * TODO: Be able to give players a comparison against monsters and their stats
 */

/* Template data: Skills
 * This stores all of the information for each of the skills.
 *
 * In order to handle everything, the following structure will be used:
 *  name
 *  pvm_dmg
 *  pvp_dmg
 *  List of abilities:
 *      skill level required
 *      ability
 */
const skills = {
  anatomy: {
    pvm_dmg: 20,
    pvp_dmg: 20,
    abilities: [
      { skill: 60, ability: 'bandage cure' },
      { skill: 80, ability: 'ressurection' }
    ]
  },
  archery: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  alchemy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'animal lore': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'animal taming': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'arms lore': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  begging: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  blacksmithing: {
    pvm_dmg: 15,
    pvp_dmg: 6,
    abilities: [
      { skill: 95, ability: 'use blacksmithy repair kits' }
    ]
  },
  carpentry: {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
      { skill: 95, ability: 'use carpentry repair kits' }
    ]
  },
  cartography: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  cooking: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  camping: {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
      { skill: 60, ability: 'Hike to cities, moongates, and healer caravans' },
      { skill: 80, ability: 'Hike to dungeons and subterranean areas' },
      { skill: 100, ability: 'Hike to shrines and points of interest' },
      { skill: 120, ability: 'Hike to homes and guildhouses' }
    ]
  },
  'detecting hidden': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  discord: {
    pvm_dmg: 25,
    pvp_dmg: 0,
    abilities: [
      { skill: 1, ability: 'Play song of discordance' }
    ]
  },
  'evaluating intelligence': {
    pvm_dmg: 50,
    pvp_dmg: 37.5,
    abilities: [
    ]
  },
  fencing: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  fishing: {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
    ]
  },
  'forensic evaluation': {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
    ]
  },
  healing: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  herding: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  hiding: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  inscription: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'item identification': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  lockpicking: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  lumberjacking: {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
    ]
  },
  'mace fighting': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  magery: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  meditation: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  mining: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  musicianship: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  parrying: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 1, ability: 'shield taunt' }
    ]
  },
  peacemaking: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 1, ability: 'song of peacemaking' }
    ]
  },
  poisoning: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 1, ability: 'increased poison damage' }
    ]
  },
  provocation: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 1, ability: 'song of provocation' }
    ]
  },
  'resisting spells': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  snooping: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'spirit speaking': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  stealing: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  stealth: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 80, ability: 'backstab' }
    ]
  },
  swordsmanship: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  tactics: {
    pvm_dmg: 50,
    pvp_dmg: 50,
    abilities: [
    ]
  },
  tailoring: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  'taste identification': {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  tinkering: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  tracking: {
    pvm_dmg: 25,
    pvp_dmg: 10,
    abilities: [
    ]
  },
  veterinary: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  wreslting: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  }
}

/* Skill combo abilities:
 * This is used to track abilities that require multiple skills, i.e. resurrection
 *
 * Structure:
 *  Skill 1
 *  Skill 2
 *  Skill 1 required level
 *  Skill 2 required level
 *  Ability
 */
const skill_combo_abilities = {

}

function calculateBonuses (selectedSkills) {
  // We start out at -50% because of Tactics
  let pvmBonus = -50
  let pvpBonus = -50

  for (const [skill, value] of Object.entries(selectedSkills)) {
    const skillInfo = skills[skill]

    pvmBonus += value / 100 * skillInfo.pvm_dmg
    pvpBonus += value / 100 * skillInfo.pvp_dmg
  }

  // TODO: Deal with supplemental vs tactics/anat
  if (pvpBonus > 20) {
    pvpBonus = 20
  }

  return { pvmBonus: pvmBonus, pvpBonus: pvpBonus }
}
