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
 * TODO: Give bandage heal amount range
 * - Version 2.0.0
 * TODO: Give animals that can be had as pets
 * TODO: Give taming chance
 * - Version 3.0.0
 * TODO: Give gatherable resources / gather chance
 * TODO: Give item creation chance
 * - Version 4.0.0
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
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
      { skill: 60, ability: 'bandage cure' },
      {  }
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
  anatomy: {
    pvm_dmg: 0,
    pvp_dmg: 0,
    abilities: [
    ]
  },
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
