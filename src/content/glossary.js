export const preamble = `This glossary provides players with detailed rules for *Twilight Imperium: Fourth Edition* and its *Prophecy of Kings* expansion, organized by topic. Players are encouraged to use the index on page 38 to find specific topics within the glossary.`;
export const content = [
  {
    name: 'Abilities',
    preamble: `Cards and faction sheets each have abilities that players can resolve to trigger various game effects.`,
    subsections: [
      {
        items: [
`
If information in this Rules Reference contradicts the Learn to Play booklet, the Rules Reference takes precedence.
`,`
If a card ability contradicts information in the Rules Reference, the card takes precedence. If both the card and the rules can be followed at the same time, they should be.
`,`
Each ability describes when and how a player can resolve it.

1. If an ability with a specified duration is resolved, the effect of the ability remains through that duration, even if the component that caused the ability is removed.
`,`
If a card has multiple abilities, each ability is presented as its own paragraph.
`,`
If an ability contains the word “Action,” a player must use a component action during the action phase to resolve that ability.
`,`
If an ability uses the word “cannot,” that effect is absolute.

1. If two abilities use the word “cannot,” a persistent ability takes precedence over a one-time ability and an enabling ability takes precedence over a cancel ability.
`,`
When a player resolves an ability, they must resolve the ability in its entirety. Any parts of the ability preceded by the word “may” are optional, and the player resolving the ability may choose not to resolve those parts.
`,`
Abilities on components that remain in play are mandatory unless those abilities use the word “may.”
`,`
If an ability has multiple effects separated by the word “and,” a player must resolve as many of the ability’s effects as possible. However, if the player cannot resolve all of its effects, that player is allowed to resolve as many as they can.`,
        ]
      },
      {
        name: 'Costs',
        items: [
`
Some abilities have a cost that is followed by an effect. The cost of an ability is separated from the effect by the word “to” or by a semicolon. A player cannot resolve the effect of such an ability if they cannot resolve that ability’s cost.
`,`
Some examples of an ability’s cost include spending resources, spending trade goods, spending command tokens, exhausting cards, purging cards, and activating specific systems.`,
        ]
      },
      {
        name: 'Timing',
        items: [
`
If the timing of an ability uses the word “before” or “after,” the ability’s effect occurs immediately before or after the described timing event, respectively.

1. For example, if an ability is resolved “after a ship is destroyed,” the ability must be resolved as soon as the ship is destroyed and not later during that turn or round.
`,`
If the timing of an ability uses the word “when,” the ability’s effect occurs at the moment of the described timing event.

1. Such an ability typically modifies or replaces the timing event in some way.
`,`
Effects that occur “when” an event happens take priority over effects that occur “after” an event happens.
`,`
If an ability uses the word “then,” a player must resolve the effect that occurs before the word “then” or they cannot resolve the effect that occurs after the word “then.”
`,`
Each ability can be resolved once for each occurrence of that ability’s timing event. For example, if an ability is resolved “At the start of combat,” it can be resolved at the start of each combat.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **action phase**, each player takes a turn resolving an ability in initiative order, beginning with the active player. This process continues until each player has resolved each ability that they wish to resolve during that window.
`,`
If there are multiple abilities that players wish to resolve at the same time during the **strategy** or **agenda phases**, players take turns resolving abilities starting with the speaker and proceeding clockwise. This process continues until each player has resolved each ability that they wish to resolve during that window.`,
        ]
      },
      {
        name: 'Component-Specific Rules',
        items: [
`
The opening paragraph of each ability found on an action card describes when a player can resolve that card’s ability.
`,`
The opening paragraph of most abilities found on promissory notes describes when a player can resolve that card’s ability.

1. Some promissory notes have abilities that trigger as soon as a player receives the card.
`,`
Abilities on agenda cards correspond to an outcome. Players resolve these abilities during the agenda phase after players vote for a particular outcome.
`,`
Each faction has faction abilities presented on its faction sheet. Each faction’s flagship has one or more unique abilities. Some abilities provide players with perpetual effects.
`,`
Some units have unit abilities. These abilities are named and presented above a unit’s attributes on a player’s faction sheet or on a unit upgrade card. Each unit ability has unique rules for when a player can resolve that ability. The following abilities are unit abilities:

* Anti-Fighter Barrage
* Bombardment
* Deploy
* Planetary Shield
* Production
* Space Cannon
* Sustain Damage
`,`
If a unit’s ability uses the phrase “this system” or “this planet,” the ability is referring to the system or planet that contains that unit.`,
        ]
      }
    ],
    related: [
      ['Actions Cards', '2'],
      // TODO
    ]
  },
  {
    name: 'Action Cards',
    preamble: 'Action cards provide players with various abilities that they can resolve as described on the cards.',
    subsections: [
      {
        items: [
`
Each player draws one action card during each status phase.
`,`
Players can draw action cards by resolving the primary and secondary abilities of the “Politics” strategy card.
`,`
When a player draws an action card, they take the top card from the action card deck and add it to their hand of action cards.
`,`
Each player’s hand can have a maximum of **seven action cards**. If a player ever has more than seven action cards, that player must choose seven cards to keep and discard the rest.

1. A game effect can increase or decrease the number of cards a player’s hand can have.
`,`
A player’s action cards remain hidden from other players until those cards are played.
`,`
The first paragraph of each action card is presented in bold text and describes the timing of when that card’s ability can be resolved.

1. If an action card contains the word “Action,” a player must use a component action during the action phase to resolve the ability. A player cannot resolve a component action if they cannot completely resolve its ability.
2. Multiple action cards with the **same** name cannot be played during a single timing window to affect the same units or game effect. Canceled cards are not treated as being played.
`,`
To play an action card, a player reads and resolves the card’s ability text, making any decisions as prompted by the card. Then, that player discards the card, placing it in the action discard pile.
`,`
If an action card is canceled, that card has no effect and is discarded.
`
        ]
      }
    ]
  },
  {
    name: 'Action Phase',
    preamble: 'During the action phase, each player takes a turn in initiative order.',
    subsections: [
      {
        items: [
`
During a player’s turn, they perform a single action. After each player has taken a turn, player turns begin again in initiative order. This process continues until all players have passed.
`,`
If a player cannot perform an action, they must pass.
`,`
After a player has passed, they have no further turns and cannot perform additional actions during that action phase.

1. During a turn that a player passes, they can resolve transactions and “at the start of your turn” abilities.
2. A player that has passed can still resolve the secondary ability of other players’ strategy cards.
3. It is possible for a player to perform multiple, consecutive actions during an action phase if all other players have passed during that action phase.
`,`
A player cannot pass until they have performed the strategic action of their strategy card. 

1. During a three-player or four-player game, a player cannot pass until they have exhausted both of their strategy cards.
`,`
After all players have passed, play proceeds to the status phase.
`
        ]
      }
    ]
  },
  {
    name: 'ACTIVE PLAYER',
    preamble: 'The active player is the player taking a turn during the action phase.',
    subsections: [
      {
        items: [
`
During the action phase, the player who is first in initiative order is the first active player.
`,`
After the active player takes a turn, the next player in initiative order becomes the active player.
`,`
After the last player in initiative order takes a turn, the player who is first in initiative order becomes the active player again, and turns begin again in initiative order, ignoring any players who have already passed.
`,
        ]
      }
    ]
  },
  {
    name: 'ACTIVE SYSTEM',
    preamble: 'The active system is the system that is activated during a tactical action.',
    subsections: [
      {
        items: [
`
When a player performs a tactical action, they activate a system by placing a command token from their tactic pool in that system. That system is the active system.
`,`
A player cannot activate a system that already contains one of their command tokens.
`,`
A player can activate a system that contains command tokens that match other players’ factions.
`,`
A system remains the active system for the duration of the tactical action during which it was activated.
`,
        ]
      }
    ]
  },
  {
    name: 'ADJACENCY',
    preamble: 'Two system tiles are adjacent to each other if any of the tiles’ sides are touching each other.',
    subsections: [
      {
        items: [
`
A system that has a wormhole is treated as being adjacent to a system that has a matching wormhole.
`,`
A unit or planet is adjacent to all system tiles that are adjacent to the system tile that contains that unit or planet.

1. A system is not adjacent to itself.
`,`
A planet is treated as being adjacent to the system that contains that planet.
`,`
Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.
`,
        ]
      }
    ]
  },
  {
    name: 'AGENDA CARD',
    preamble: 'Agenda cards represent galactic laws and policies. During each agenda phase, players cast votes for specific outcomes on two agenda cards.',
    subsections: [
      {
        name: '',
        items: [
`
There are two types of agenda cards: laws and directives.
`,`
Laws can permanently change the rules of the game.
`,`
When resolving a law, if a “For” outcome received the most votes, or if the law requires an election, the law’s ability becomes a permanent part of the game. Players resolve the outcome and place the agenda card either in the common play area or in a player’s play area, as dictated by the card.
`,`
If a law is in a player’s play area as opposed to the common play area, that player owns that law.
`,`
If a law is discarded from play, that law’s ability is no longer in effect. Place that card on the top of the agenda card discard pile.
`,`
If an “Against” outcome of a law received the most votes, players resolve the outcome and discard the agenda.
`,`
Directives provide one-time game effects.
`,`
When resolving a directive, players resolve the outcome that received the most votes and discard the agenda card.
`,
        ]
      }
    ]
  },
  {
    name: 'AGENDA PHASE',
    preamble: 'During the agenda phase, players can cast votes on agendas that can change the rules of the game.',
    subsections: [
      {
        items: [
`
Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round. To resolve the agenda phase, players perform the following steps:
`,`
STEP 1- FIRST AGENDA: Players resolve the first agenda by following these steps in order: i. REVEAL AGENDA: The speaker draws one agenda card from the top of the agenda deck and reads it aloud to all players, including all of its possible outcomes. ii. VOTE: Each player, starting with the player to the left of the speaker and continuing clockwise, can cast votes for an outcome of the current agenda. iii. RESOLVE OUTCOME: Players tally each vote that was cast and resolve the outcome that received the most votes.
`,`
STEP 2- SECOND AGENDA: Players repeat the “First Agenda” step of this phase for a second agenda.
`,`
STEP 3- READY PLANETS: Each player readies each of their exhausted planets. Then, a new game round begins starting with the strategy phase.
`,
        ]
      },
      {
        name: 'VOTING',
        preamble: 'When voting during the agenda phase, a player can cast votes for a specific outcome of an agenda',
        items: [
`
To cast votes, a player exhausts any number of their planets and chooses an outcome. The number of votes cast for that outcome is equal to the combined influence values of the planets that the player exhausts. a When a player exhausts a planet to cast votes, that player must cast the full amount of votes provided by that planet.
`,`
A player cannot cast votes for multiple outcomes of the same agenda. Each vote a player casts must be for the same outcome.
`,`
Some agendas have “For” and “Against” outcomes. When a player casts votes on such an agenda, that player must cast their votes either “For” or “Against.”
`,`
Some agendas instruct players to elect either a player or a planet. When a player casts votes for such an agenda, that player must cast their vote for an eligible player or planet as described on the agenda.
`,`
When electing a player, a player can cast votes for themselves. a When resolving these agendas, the “elected player” is the player for whom the most votes are cast.
`,`
When electing a planet, a player must cast votes for a planet that is controlled by a player. a When resolving these agendas, the “elected planet” is the planet that had the most votes cast for it.
`,`
When casting votes, a player must declare aloud the outcome for which their votes are being cast.
`,`
Trade goods cannot be spent to cast votes.
`,`
A player may choose to abstain by not casting any votes.
`,`
Some game effects allow a player to cast additional votes for an outcome. These votes cannot be cast for a different outcome than other votes cast by that player.
`,`
If a player cannot vote on an agenda because of a game effect, that player cannot cast votes for that agenda by exhausting planets or through any other game effect.
`,
        ]
      },
      {
        name: 'OUTCOMES',
        items: [
`
To resolve an outcome, the speaker follows the instructions on the agenda card.
`,`
If there is a tie for the outcome that received the most votes, or if no outcome receives any votes, the speaker decides which of the tied outcomes to resolve.

1. The speaker’s decision is not a vote.
`,`
If an “Elect” or “For” outcome of a law was resolved, that card remains in play and permanently affects the game.
`,`
If a directive or an “Against” outcome of a law was resolved, that card is placed in the agenda discard pile.
`,`
Some game effects instruct a player to predict an outcome. To predict an outcome, a player declares aloud the outcome they think will receive the most votes. That player must make this prediction after the agenda is revealed but before any votes have been cast.

1. A predicted outcome must be a possible outcome of the revealed agenda.
2. After resolving the outcome of the agenda, any abilities that were dependent upon predicting the outcome are resolved.
`
        ]
      }
    ]
  },
  {
    name: 'ANOMALIES',
    preamble: 'An anomaly is a system tile that has unique rules.',
    subsections: [
      {
        name: '',
        items: [
`
An anomaly is identified by a red border located on the tile’s corners.
`,`
There are four types of anomalies: asteroid fields, nebulae, supernovas, and gravity rifts.

1. Some anomalies contain planets; those systems are still anomalies.
`,`
Each type of anomaly is identified by its art, as follows:

* Asteroid
* Field Nebula
* Supernova
* Gravity Rift
`,`
Abilities can cause a system tile to become an anomaly; that system tile is an anomaly in addition to its other properties.
`,`
Abilities can cause a system to be two different anomalies; that system has the properties of both anomalies.
`,
        ]
      }
    ]
  },
  {
    name: 'ANTI-FIGHTER BARRAGE (UNIT ABILITY)',
    preamble: 'A unit with the “Anti-Fighter Barrage” ability may be able to destroy an opponent’s fighters at the onset of a space battle. During the “Anti-Fighter Barrage” step of the first round of space combat, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- Each player rolls dice for each of their units in the combat that has the “Anti-Fighter Barrage” ability; this is called an anti-fighter barrage roll. A hit is produced for each die roll that is equal to or greater than the unit’s anti-fighter barrage value.

1. A unit’s “Anti-Fighter Barrage” ability is presented along with a unit’s attributes on faction sheets and unit upgrade technology cards.
2. The “Anti-Fighter Barrage” ability is displayed as “AntiFighter Barrage X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled.
3. Game effects that reroll, modify, or otherwise affect combat rolls do not affect anti-fighter barrage rolls.
4. This ability can still be used if no fighters are present; hits produced may be used to trigger specific abilities.
`,`
STEP 2- Each player must choose and destroy one of their fighters in the active system for each hit their opponent’s antifighter barrage roll produced.

1. If a player has to assign more hits than they have fighters in the active system, the excess hits have no effect.
`,
        ]
      }
    ]
  },
  {
    name: 'ASTEROID FIELD',
    preamble: 'An asteroid field is an anomaly that affects movement.',
    subsections: [
      {
        name: '',
        items: [
`
A ship cannot move through or into an asteroid field
`,
        ]
      }
    ]
  },
  {
    name: 'ATTACH',
    preamble: 'Some game effects instruct a player to attach a card to a planet card. The attached card modifies that planet card in some way.',
    subsections: [
      {
        name: '',
        items: [
`
To attach a card to a planet card, a player places the card with the attach effect partially underneath the planet card.
`,`
If a player gains or loses control of planet that contains a card with an attach effect, the attached card stays with that planet.

1. The attached card maintains its exhausted or readied state.
2. If a planet card is purged, also purge all cards that are attached to that planet card and remove the corresponding attachment tokens from the game board.
`,`
When a card is attached to a planet card, place the corresponding attachment token on that planet on the game board.
`,
        ]
      }
    ]
  },
  {
    name: 'ATTACKER',
    preamble: 'During combat, the active player is the attacker.',
  },
  {
    name: 'BLOCKADED',
    preamble: 'A player’s unit with “Production” is blockaded if it is in a system that does not contain any of their ships and contains other players’ ships.',
    subsections: [
      {
        name: '',
        items: [
`
A player cannot use a blockaded unit to produce ships; that player can still use a blockaded unit to produce ground forces.
`,`
When a player blockades another player’s space dock, if the blockaded player has captured any of the blockading player’s units, those units are returned to the blockading player’s reinforcements.

1. While a player is blockading another player, the blockaded player cannot capture any of the blockading player’s units.
`,
        ]
      }
    ]
  },
  {
    name: 'BOMBARDMENT (UNIT ABILITY)',
    preamble: 'A unit with the “Bombardment” ability may be able to destroy another player’s ground forces during an invasion. During the “Bombardment” step, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- The active player chooses which planet each of their units that has a “Bombardment” ability will bombard. Then, that player rolls dice for each of those units; this is called a bombardment roll. A hit is produced for each die roll that is equal to or greater than the unit’s “Bombardment” value.

1. A unit’s “Bombardment” ability is presented along with a unit’s attributes on faction sheets and unit upgrade technology cards.
2. The “Bombardment” ability is displayed as “Bombardment X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Bombardment” abilities have a (Y) value; a bombardment roll for such a unit consists of one die.
3. Game effects that reroll, modify, or otherwise affect combat rolls do not affect bombardment rolls.
4. Multiple planets in a system may be bombarded, but a player must declare which planet a unit is bombarding before making a bombardment roll.
5. The L1Z1X’s “Harrow” ability does not affect the L1Z1X player’s own ground forces.
6. Planets that contain a unit with the “Planetary Shield” ability cannot be bombarded.
`,`
STEP 2- The player who controls the planet that is being bombarded chooses and destroys one of their ground forces on that planet for each hit result the bombardment roll produced.
1. If a player has to assign more hits than that player has ground forces, the excess hits have no effect.
`,
        ]
      }
    ]
  },
  {
    name: 'CAPACITY (ATTRIBUTE)',
    preamble: 'Capacity is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
A unit’s capacity value indicates the maximum combined number of fighters and ground forces that it can transport.
`,`
The combined capacity values of a player’s ships in a system determine the number of fighters and ground forces that player can have in that system’s space area.
`,`
If a player has more fighters and ground forces in the space area of a system than the total capacity of that player’s ships in that system, that player must remove the excess units.

1. A player can choose which of their excess units to remove.
2. Ground forces on planets do not count against capacity.
3. A player’s fighters and ground forces do not count against capacity during combat. At the end of combat, any excess units are removed and returned to that player’s reinforcements.
`,`
Fighters and ground forces are not assigned to specific ships, except while they are being transported.
`,
        ]
      }
    ]
  },
  {
    name: 'CAPTURE',
    preamble: 'Some abilities instruct a player to capture a unit, preventing the unit’s original owner from using it.',
    subsections: [
      {
        name: '',
        items: [
`
If a player captures a non-fighter ship or mech, they place it on their faction sheet. When such a unit is returned, it is placed into the reinforcements of the original owner.
`,`
A captured non-fighter ship or mech is returned under the following circumstances:

1. If the player who captured the unit agrees to return it as part of a transaction.
2. If an ability instructs the capturing player to return the unit as part of an ability’s cost.
3. If the player whose unit was captured blockades a space dock of the player who captured the unit.
`,`
If a player captures a fighter or infantry, it is placed in its reinforcements instead of on the capturing player’s faction sheet; the capturing player places a fighter or infantry token from the supply on their faction sheet instead. 
`,`
Captured fighters and infantry do not belong to any player and are returned only when an ability instructs the capturing player to do so.

1. Captured fighters and infantry cannot be returned as part of a transaction.
2. Captured fighters and infantry are not returned as the result of a blockade.
3. When a captured fighter or infantry is returned, it is placed in the supply.
`,`
While a unit is captured, it cannot be produced or placed by its original owner until it is returned.
`,`
If one or more of a player’s space docks is being blockaded, that player cannot capture units from the blockading players.
`,
        ]
      }
    ]
  },
  {
    name: 'COMBAT (ATTRIBUTE)',
    preamble: 'Combat is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
During combat, if a unit’s combat roll produces a result equal to or greater than its combat value, it produces a hit.
`,`
If a unit’s combat value contains two or more burst icons, instead of rolling a single die, the player rolls one die for each burst icon when making that unit’s combat rolls.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMAND SHEET',
    preamble: 'Each player has a command sheet that contains a strategy pool, a tactic pool, a fleet pool, a trade good area, and a quick reference.',
    subsections: [
      {
        name: '',
        items: [
`
The pools on the command sheet are where players place their command tokens. Command tokens in a player’s pools are used by that player to perform strategic and tactical actions and to increase the number of ships that player can have in each system.
`,`
The trade good area on the command sheet is where a player places their trade good tokens; trade tokens in a player’s trade good area can be spent by that player as resources, influence, or to resolve certain game effects that require trade goods.
`,`
Players who are familiar with the game can hide the quick reference by placing that portion of the command sheet under their faction sheets.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMAND TOKENS',
    preamble: 'Command tokens are a currency that players use to perform actions and expand their fleets.',
    subsections: [
      {
        name: '',
        items: [
`
Each player begins the game with eight tokens on their command sheet: three in their tactic pool, three in their fleet pool, and two in their strategy pool.

1. Command tokens in the strategy and tactic pool are placed with the faction symbol faceup.
2. Command tokens in the fleet pool are placed with the ship silhouette faceup.
`,`
When a player gains a command token, they choose which of their three pools to place it in.
`,`
A player is limited by the amount of command tokens in their reinforcements.

1. If a player would gain a command token but has none available in their reinforcements, that player cannot gain that command token.
2. If a game effect would place a player’s command token from their reinforcements and none are available, that player must take a token from a pool on their command sheet, unless the token would be placed into a system that already contains one of their command tokens.
`,`
During the action phase, a player can perform a tactical action by spending a command token from their tactic pool; they place the command token in a system.
`,`
After a player performs a strategic action during the action phase, each other player can resolve the secondary ability of that strategy card by spending a command token from their strategy pool.

1. A player does not spend a command token to resolve the secondary ability of the “Leadership” strategy card.
`,`
If a game effect would place a player’s command token in a system where they already have one, they place the token in their reinforcements instead. Any effects that resolve by placing that token are resolved as normal.
`,
        ]
      }
    ]
  },
  {
    name: 'COMMODITIES',
    preamble: 'Commodities represent goods that are plentiful for their own faction and are desired by other factions. A commodity has no inherent game effects, but converts into a trade good if given to or received from another player.',
    subsections: [
      {
        name: '',
        items: [
`
Commodities and trade goods are represented by opposite sides of the same token.
`, `
The commodity value on a player’s faction sheet indicates the maximum number of commodities that player can have.
`, `
When an effect instructs a player to replenish commodities, that player takes the number of commodity tokens necessary so that the amount of commodities that player has equals the commodity value on their faction sheet. Then, those tokens are placed faceup in the commodity area of that player’s faction sheet.
`, `
When a player replenishes commodities, that player takes the commodity tokens from the supply.
`, `
Players can trade commodities following the rules for transactions. When a player receives a commodity from another player, the player who received that token converts it into a trade good by placing it in the trade good area of their command sheet with the trade good side faceup.

1. That token is no longer a commodity token; it is a trade good token.
2. A player can trade commodity tokens before resolving a game effect that allows them to replenish commodities.
3. If a game effect instructs a player to convert a number of their own commodities to trade goods, those trade goods are not treated as being gained for the purpose of triggering other abilities.
`, `
Any game effect that instructs a player to give a commodity to another player causes that commodity to be converted into a trade good.
`, `
A player cannot spend commodities unless otherwise specified; a player can only trade them during a transaction.
`, `
Commodity tokens come in values of one and three. A player can swap between these tokens as necessary.
`
        ]
      }
    ]
  },
  {
    name: 'COMPONENT ACTION',
    preamble: 'A component action is a type of action that a player can perform during their turn of an action phase.',
    subsections: [
      {
        name: '',
        items: [
`
Component actions can be found on various game components, including action cards, technology cards, leaders, exploration cards, relics, promissory notes, and faction sheets. Each component action is indicated by an “Action” header.
`,`
To perform a component action, a player reads the action’s text and follows the instructions as described.
`,`
A component action cannot be performed if its ability cannot be completely resolved.
`,`
If a component action is canceled, it does not use that player’s action.
`,
        ]
      }
    ]
  },
  {
    name: 'COMPONENT LIMITATIONS',
    preamble: 'If a component type is depleted during the game, players obey the following rules:',
    subsections: [
      {
        name: '',
        items: [
`
DICE: Dice are limitless. If a player needs to roll more dice than the game provides, that player should roll as many as possible, record the results, and then reroll dice as necessary
`,`
TOKENS: Tokens are limited to those included in the game, except for the following:

* Control Tokens
* Fighter Tokens
* Trade Good Tokens
* Infantry Tokens
`,`
If any of the above tokens are depleted, players can use a suitable substitute, such as a coin or bead.
`,`
UNITS: Units are limited to those included in the game, except for fighters and ground forces.

1. When a player would place a unit, if there are none of that type left in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. A player can remove any number of their units in this way; however, any units that are removed must be placed immediately. Abilities cannot force a player to remove and place a unit in this manner.
2. When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece. These tokens must be accompanied by at least one plastic piece of the same type; players can swap infantry and fighter tokens for plastic pieces at any time.
`,`
CARDS: When a deck is depleted, players shuffle the deck’s discard pile and place it facedown to create a new deck.
`,
        ]
      }
    ]
  },
  {
    name: 'CONSTRUCTION (STRATEGY CARD)',
    preamble: 'The “Construction” strategy card allows players to construct structures on planets they control. This card’s initiative value is “4.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Construction” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Construction” strategy card, the active player may place either one PDS or one space dock on a planet they control. Then, that player may place an additional PDS on a planet they control.

1. The structures can be placed on the same planet or different planets.
2. The structures can be placed in any systems, regardless of whether the player has a command token in the system or not.
`,`
After the active player resolves the primary ability of the “Construction” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool and place that command token in any system. If that player already has a command token in that system, the spent token is returned to their reinforcements instead. Then, that player places either one PDS or one space dock on a planet they control in that system.
`,`
When a player places either a PDS or space dock using the “Construction” strategy card, they take that PDS or space dock from their reinforcements.

1. If a player does not have the unit in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. Then, that player must place the unit on the game board as instructed by the effect that is placing the unit.
`,
        ]
      }
    ]
  },
  {
    name: 'CONTROL',
    preamble: 'Each player begins the game with control of each planet in their home system. During the game, players can gain control of additional planets.',
    subsections: [
      {
        name: '',
        items: [
`
When a player gains control of a planet, they take the planet card that corresponds to that planet and place it in their play area; that card is exhausted.

1. If a player is the first player to control a planet, they take the planet card from the planet card deck.
2. If another player controls the planet, they take that planet’s card from the other player’s play area.
3. When a player gains control of a planet that is not already controlled by another player, they explore that planet.
`,`
A player cannot gain control of a planet that they already control.
`,`
While a player controls a planet, that planet’s card remains in their play area until they lose control of that planet.
`,`
A player can control a planet that they do not have any units on; that player places a control token on that planet to mark that they control it.
`,`
A player loses control of a planet if they no longer have units on it and another player has units on it.

1. The player that placed units on the planet gains control of that planet.
2. During the invasion step of a tactical action, control is determined during the “Establish Control” step instead.
`,`
A player can lose control of a planet through some game effects.
`,`
If a player loses control of a planet that contains their control token, they remove their control token from the planet.
`,
        ]
      }
    ]
  },
  {
    name: 'COST (ATTRIBUTE)',
    preamble: 'Cost is an attribute of some units that is presented on faction sheets and unit upgrade technology cards. A unit’s cost determines the number of resources a player must spend to produce that unit.',
    subsections: [
      {
        name: '',
        items: [
`
To produce a unit, a player must spend a number of resources equal to or greater than the cost of the unit they are producing.
`,`
If the cost is accompanied by two icons-typically for fighters and ground forces-a player produces two of that unit for that cost.
`,`
If a unit does not have a cost, it cannot be produced. a Structures do not have costs and are usually placed by resolving the “Construction” strategy card.
`,
        ]
      }
    ]
  },
  {
    name: 'CUSTODIANS TOKEN',
    preamble: 'The custodians token begins each game on Mecatol Rex. The token represents the caretakers that safeguard the seat of the empire until such time as the galactic council can be reconvened.',
    subsections: [
      {
        name: '',
        items: [
`
Units can move into the system that contains Mecatol Rex following normal rules; however, players cannot commit ground forces to land on Mecatol Rex until the custodians token is removed from the planet.
`,`
Before the “Commit Ground Forces” step of an invasion, the active player can remove the custodians token from Mecatol Rex by spending six influence. Then, that player must commit at least one ground force to land on the planet. a If a player cannot commit ground forces to land on Mecatol Rex, they cannot remove the custodians token.
`,`
When a player removes the custodians token from Mecatol Rex, they take the token from the game board and place it in their play area. Then, they gain one victory point.
`,`
After a player removes the custodians token from Mecatol Rex, the agenda phase is added to all subsequent game rounds, including the game round during which the custodians token was removed from Mecatol Rex.
`,
        ]
      }
    ]
  },
  {
    name: 'DEALS',
    preamble: 'A deal is an agreement between two players that may or may not include a transaction that involves physical components.',
    subsections: [
      {
        name: '',
        items: [
`
Players can make deals with each other at any time, even if they are not neighbors. However, deals that include a transaction must follow the rules for transactions, including that the players be neighbors.
`,`
Deals are binding or non-binding according to the conditions of the deal.
`,`
If the terms of a deal can be resolved immediately, it is a binding deal. When a deal is binding, a player must adhere to the terms of the agreement and whatever transactions, if any, were agreed upon.

1. The results of playing an action card, including the act of successfully resolving a card, are not instantaneous and cannot be guaranteed. They cannot be part of a binding deal.
`,`
If the terms of a deal cannot be resolved immediately, it is a non-binding deal. When a deal is non-binding, a player does not have to adhere to any part of the agreement.
`,
        ]
      }
    ]
  },
  {
    name: 'DEFENDER',
    preamble: 'During either a space or ground combat, the player who is not the active player is the defender.',
  },
  {
    name: 'DEPLOY',
    preamble: 'Some units have deploy abilities. Deploy abilities are indicated by the “Deploy” header and provide the means to place specific units on the game board without producing them as normal.',
    subsections: [
      {
        name: '',
        items: [
`
A player can use a unit’s deploy ability when the ability’s conditions are met to place that unit on the game board. a A player does not have to spend resources to deploy a unit unless otherwise specified.
`,`
A player can only resolve a deploy ability to place a unit that is in their reinforcements.

1. If there are no units that have a deploy ability in a player’s reinforcements, the deploy ability cannot be used.
`,`
A unit’s deploy ability can be resolved only once per timing window.
`,
        ]
      }
    ]
  },
  {
    name: 'DESTROYED',
    preamble: 'Various game effects can cause a unit to be destroyed. When a player’s unit is destroyed, it is removed from the game board and returned to their reinforcements.',
    subsections: [
      {
        name: '',
        items: [
`
When a player assigns hits that were produced against their units, that player chooses a number of their units to be destroyed equal to the number of hits produced against those units.
`,`
If a player’s unit is removed from the board by a game effect, it is not treated as being destroyed; effects that trigger when a unit is destroyed are not triggered.
`,
        ]
      }
    ]
  },
  {
    name: 'DIPLOMACY (STRATEGY CARD)',
    preamble: 'The “Diplomacy” strategy card can be used to preemptively prevent other players from activating a specific system. It can also be used to ready planets. This card’s initiative value is “2.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Diplomacy” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Diplomacy” strategy card, the active player chooses a system that contains a planet they control other than the Mecatol Rex system; each other player places one command token from their reinforcements in that system. Then, the active player readies any two of their exhausted planets.

1. If a player has no command tokens in their reinforcements, that player places one command token of their choice from their command sheet.
2. If a player already has a command token in the chosen system, they do not place a command token there.
`,`
After the active player resolves the primary ability of the “Diplomacy” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to ready up to two exhausted planets they control.
`,
        ]
      }
    ]
  },
  {
    name: 'ELIMINATION',
    preamble: 'A player who is eliminated is no longer part of the game.',
    subsections: [
      {
        name: '',
        items: [
`
A player is eliminated when they meet all of the following three conditions:

1. The player has no ground forces on the game board.
2. The player has no unit that has “Production.”
3. The player does not control any planets.
`,`
When a player becomes eliminated, all of the units, command tokens, control tokens, promissory notes, technologies, command sheets, and the faction sheet that matches that player’s faction or color are returned to the game box, including those in their reinforcements.
`,`
When a player becomes eliminated, all agenda cards they own are discarded.
`,`
When a player becomes eliminated, each promissory note they have that matches another player’s faction or color is returned to that player. a Promissory notes that match the eliminated player are returned to the game box, even if another player has them.
`,`
When a player becomes eliminated, each action card in their hand is discarded.
`,`
When a player becomes eliminated, their strategy cards are returned to the common play area whether those cards have been exhausted or not.
`,`
When a player becomes eliminated, their secret objectives are shuffled back into the secret objective deck whether those secret objectives have been completed or not.
`,`
If the speaker becomes eliminated, the speaker token passes to the player to the speaker’s left.
`,`
If a game that started with five or more players becomes a game with four or fewer players due to elimination, the players continue to select only one strategy card during the strategy phase.
`,`
When players are eliminated, faction-specific components interact with the game as follows:

1. If a player becomes eliminated and the Nekro Virus’ assimilator “X” or assimilator “Y” token is placed on one of their faction technologies, that technology remains in play.
2. If the Ghost of Creuss player becomes eliminated, their wormhole tokens remain on the game board for the remainder of the game.
3. If the Naalu player becomes eliminated while another player has the Naalu player’s “0” token, that token remains with its current player until the end of the status phase, and then it is removed from play.
4. If the Titans of Ul player becomes eliminated while their hero or promissory note is attached to a planet, those attachments and attachment tokens remain in play for the remainder of the game.
5. If the Mahact Gene-Sorcerers become eliminated while they have another player’s command tokens on their faction sheet, those command tokens are returned to their respective players’ reinforcements.
6. If the Mahact Gene-Sorcerers have an eliminated player’s command token on their faction sheet, that command token remains in play, as does the eliminated player’s commander, if it is unlocked.
`,`
If a player becomes eliminated, any units they have captured are returned to the reinforcements of their original owners.
`,
        ]
      }
    ]
  },
  {
    name: 'EXHAUSTED',
    preamble: 'Some cards can be exhausted. A player cannot resolve abilities or spend the resources or influence of an exhausted card.',
    subsections: [
      {
        name: '',
        items: [
`
To exhaust a card, a player flips the card facedown.
`,`
During the “Ready Cards” step of the status phase, each player readies all of their exhausted cards by flipping those cards faceup.
`,`
A player exhausts their planet cards to spend either the resources or influence on that card.
`,`
Abilities, including some found on technology cards, may instruct a player to exhaust a card to resolve those abilities. If a card is already exhausted, it cannot be exhausted again.

1. Passive abilities on an exhausted card are still in effect while that card is exhausted.
`,`
After a player performs a strategic action, they exhaust the strategy card that corresponds to that action.
`,
        ]
      }
    ]
  },
  {
    name: 'EXPLORATION',
    preamble: 'Planets and some space areas can be explored, yielding varying results determined by the cards drawn from the exploration decks.',
    subsections: [
      {
        name: '',
        items: [
`
When a player takes control of a planet that is not already controlled by another player, they explore that planet.
`,`
When a player explores a planet, they draw and resolve a card from the exploration deck that corresponds to that planet’s trait.

1. There are three planetary exploration decks, each of which corresponds to a planet trait: cultural, hazardous, and industrial.
2. Planets that do not have traits, such as Mecatol Rex and planets in home systems, cannot be explored.
3. If a planet has multiple traits, the player exploring the planet chooses which of the corresponding exploration decks to draw from.
4. If a player gains control of multiple planets or resolves multiple explore effects at the same time, they choose the order in which they resolve those explorations, completely resolving each exploration card before resolving the next.
`,`
Certain abilities may allow a planet to be explored multiple times.
`,`
Players can explore space areas that contain frontier tokens if they own the “Dark Energy Tap” technology or if another game effect allows them to.

1. Frontier tokens are placed in systems during setup and by specific abilities.
`,`
When a player explores a frontier token, they draw and resolve a card from the frontier exploration deck.
`,`
After a frontier token is explored, it is discarded and returned to the supply.
`,`
To resolve an exploration card, a player reads the card, makes any necessary decisions, and resolves its ability. If the card was not a relic fragment or an attachment, it is discarded into its respective discard pile.

1. If there are no cards in an exploration deck, its discard pile is shuffled to form a new exploration deck.
`,`
If a player resolves an exploration card that has an “attach” header, they attach that card to the planet card of the planet being explored.
`,`
If a player resolves an exploration card that has “relic fragment” in the title, they place that card faceup in their play area.

1. Players can resolve the ability of relic fragments that are in their play area. Resolving these abilities allows players to draw cards from the relic deck.
2. Relic fragments can be exchanged as part of transactions.
`,
        ]
      }
    ]
  },
  {
    name: 'FIGHTER TOKENS',
    preamble: 'A fighter token functions as a plastic fighter unit for all game purposes.',
    subsections: [
      {
        name: '',
        items: [
`
When producing a fighter unit, a player can use a fighter token from the supply instead of a plastic piece.
`,`
Players can replace their plastic fighters with tokens at any time.
`,`
If a player ever has a fighter token in a system that does not contain one of their plastic fighters, that player must replace it with a plastic fighter from their reinforcements.

1. If the player cannot replace the token, the unit is destroyed.
`,`
Fighter tokens come in values of one and three. A player can swap between these tokens as necessary.
`,
        ]
      }
    ]
  },
  {
    name: 'FLEET POOL',
    preamble: 'The fleet pool is an area of a player’s command sheet.',
    subsections: [
      {
        name: '',
        items: [
`
The number of command tokens in a player’s fleet pool indicates the maximum number of non-fighter ships that a player can have in a system.

1. Units that are on planets or that count against a player’s capacity do not count against that player’s fleet pool.
2. Units that are being transported through systems do not count against a player’s fleet pool in those systems.
`,`
Players place command tokens in their fleet pools with the ship silhouette faceup.
`,`
If at any time the number of a player’s non-fighter ships in a system exceeds the number of tokens in that player’s fleet pool, they choose and remove excess ships in that system, returning those units to their reinforcements.
`,`
Players do not spend command tokens from this pool unless a game effect specifically allows it.
`,
        ]
      }
    ]
  },
  {
    name: 'FRONTIER TOKENS',
    preamble: 'Frontier tokens can be explored for a variety of game effects.',
    subsections: [
      {
        name: '',
        items: [
`
Frontier tokens are placed on the game board during setup. One frontier token is placed in each system that does not contain any planets.

1. Frontier tokens are not placed on hyperlane tiles.
2. A system cannot have more than one frontier token.
3. Frontier tokens are placed in anomalies that do not have planets.
4. A frontier token is placed in the Creuss gate system.
`,
        ]
      }
    ]
  },
  {
    name: 'GAME BOARD',
    preamble: 'The game board consists of all system tiles in play.',
    subsections: [
      {
        name: '',
        items: [
`
The game board consists of all system tiles that were placed during setup, even if the sides of those tiles do not touch any other system tiles, such as the Ghosts of Creuss’ home system.
`,`
A system tile is on the edge of the game board if any of its sides are not touching another system tile.

1. The Ghosts of Creuss home system and the wormhole nexus are on the edge of the game board.
`,
        ]
      }
    ]
  },
  {
    name: 'GAME ROUND',
    preamble: `
A game round consists of the following four phases:

1. Strategy Phase
2. Action Phase
3. Status Phase
4. Agenda Phase
`,
    subsections: [
      {
        name: '',
        items: [
`
Players skip the agenda phase during the early portion of each game. After the custodians token is removed from Mecatol Rex, the agenda phase is added to each game round.
`,`
Player turns occur during the action phase.
`,`
Abilities that last until the end of a player’s turn do not persist for the duration of a game round or into the other phases of that game round. Those effects end at the end of that player’s turn, before the next player’s turn begins.
`,
        ]
      }
    ]
  },
  {
    name: 'GRAVITY RIFT',
    preamble: 'A gravity rift is an anomaly that affects movement.',
    subsections: [
      {
        name: '',
        items: [
`
A ship that will move out of or through a gravity rift at any time during its movement, applies +1 to its move value.

1. This can allow a ship to reach the active system from farther away than it normally could.
`,`
For each ship that would move out of or through a gravity rift, one die is rolled immediately before it exits the gravity rift system; on a result of 1-3, that ship is removed from the board.

1. Dice are not rolled for units that are being transported by ships that have capacity.
2. Units that are being transported are removed from the board if the ship transporting them is removed from the board.
3. Units that are removed are returned to the player’s reinforcements.
`,`
A gravity rift can affect the same ship multiple times during a single movement.
`,`
A system that contains multiple gravity rifts is treated as a single gravity rift.
`,
        ]
      }
    ]
  },
  {
    name: 'GROUND COMBAT',
    preamble: 'During the “Ground Combat” step of an invasion, if the active player has ground forces on a planet that contains another player’s ground forces, those players resolve a ground combat on that planet. To resolve a ground combat, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- ROLL DICE: Each player rolls one die for each ground force they have on the planet; this is a combat roll. If a unit’s combat roll produces a result that is equal to or greater than that unit’s combat value, that roll produces a hit.

1. If a unit’s combat value contains two or more burst icons, the player rolls one die for each burst icon instead.
`,`
STEP 2- ASSIGN HITS: Each player in the combat must choose one of their own ground forces on the planet to be destroyed for each hit result their opponent produced.

1. When a unit is destroyed, the player who controls that unit removes it from the board and places it in their reinforcements.
`,`
After assigning hits, if both players still have ground forces on the planet, players resolve a new combat round starting with the “Roll Dice” step.
`,`
Ground combat ends when only one player (or neither player) has ground forces on the planet.

1. During the first round of a combat, “start of combat” and “start of combat round” effects occur during the same timing window.
2. During the last round of a combat, “end of combat” and “end of combat round” effects occur during the same timing window.
3. After a combat ends, the player with one or more ground forces remaining on the planet is the winner of the combat; the other player is the loser of the combat.
4. If neither player has a ground force remaining, there is no winner; the combat ends in a draw.
`,
        ]
      }
    ]
  },
  {
    name: 'GROUND FORCES',
    preamble: 'A ground force is a type of unit. All infantry and mech units in the game are ground forces. Some races have unique infantry units.',
    subsections: [
      {
        name: '',
        items: [
`
Ground forces are always on planets, in a space area with ships that have capacity values, or being transported by those ships.
`,`
Ground forces being transported by a ship are placed in a system’s space area along with the ship that is transporting them.
`,`
There is no limit to the number of ground forces a player can have on a planet.
`,
        ]
      }
    ]
  },
  {
    name: 'HYPERLANES',
    preamble: 'Hyperlanes are tiles that are used in some game board setups to create adjacency of system tiles that are not touching each other.',
    subsections: [
      {
        name: '',
        items: [
`
Systems that are connected by lines drawn across one or more hyperlane tiles are adjacent for all purposes.
`,`
Hyperlane tiles are not systems. They cannot have units on them and they cannot be targets for effects or abilities.
`,
        ]
      }
    ]
  },
  {
    name: 'IMPERIAL (STRATEGY CARD)',
    preamble: 'The “Imperial” strategy card allows players to score victory points and draw secret objectives. This card’s initiative value is “8.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Imperial” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Imperial” strategy card, the active player can score one public objective of their choice if they meet that objective’s requirements as described on its card. Then, if the active player controls Mecatol Rex, they gain one victory point; if they do not control Mecatol Rex, they can draw one secret objective card.
`,`
After the active player resolves the primary ability of the “Imperial” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to draw one secret objective card.
`,`
If a player has more than three secret objective cards after drawing a secret objective, they must choose one of their unscored secret objectives and return it to the secret objective deck. This number includes the secret objective cards in the player’s hand and the cards that player has already scored. Then, they shuffle the secret objective deck.`,
        ]
      }
    ]
  },
  {
    name: 'INFANTRY TOKENS',
    preamble: 'An infantry token functions as a plastic infantry unit for all game purposes.',
    subsections: [
      {
        name: '',
        items: [
`
When producing an infantry unit, a player can use an infantry token from the supply instead of a plastic piece.
`,`
Players can replace their plastic infantry with tokens at any time.
`,`
If a player ever has an infantry token on a planet that does not contain one of their plastic infantry or in the space area of a system that does not contain one of their plastic infantry, that player must replace it with one of their plastic infantry from their reinforcements.

1. If that player cannot replace the token, the unit is destroyed.
`,`
Infantry tokens come in values of one and three. A player can swap between these tokens as necessary.
`,
        ]
      }
    ]
  },
  {
    name: 'INFLUENCE',
    preamble: 'Influence represents a planet’s political power. Players spend influence to gain command tokens using the “Leadership” strategy card, and the influence values of planets are used to cast votes during the agenda phase.',
    subsections: [
      {
        name: '',
        items: [
`
A planet’s influence is the rightmost value (surrounded by a blue border) found on the planet’s system tile and planet card.
`,`
A player can spend a planet’s influence by exhausting that planet’s card.
`,`
A player can spend a trade good as if it were one influence. a Players cannot spend trade goods to cast votes during the agenda phase.
`,
        ]
      }
    ]
  },
  {
    name: 'INITIATIVE ORDER',
    preamble: 'Initiative order is the order in which players resolve steps of the action and status phases.',
    subsections: [
      {
        name: '',
        items: [
`
Initiative order is determined by the initiative numbers on strategy cards.

1. A player who has the Naalu “0” token has the initiative number 0.
`,`
Initiative order begins with the player who has the lowest numbered strategy card and proceeds to the player who has the strategy card that is next in numerical order.

1. Only strategy cards that were chosen during the strategy phase are used when determining initiative order; strategy cards not chosen during the strategy phase are ignored.
`,`
When playing with three or four players, a player’s initiative is determined only by their lowest-numbered strategy card.
`,
        ]
      }
    ]
  },
  {
    name: 'INVASION',
    preamble: `
Invasion is a step of the tactical action during which the active player can land ground forces on planets to gain control of those planets.

To resolve an invasion, players perform the following steps:
`,
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- BOMBARDMENT: The active player may use the “Bombardment” ability of any of their units in the active system.
`,`
STEP 2- COMMIT GROUND FORCES: If the active player has ground forces in the space area of the active system, that player may commit any number of those ground forces to land on any of the planets in that system. a To commit a ground force to a planet, the active player places that ground force unit on that planet. b The planet may contain another player’s ground forces. c If the active player does not wish to commit ground forces, that player proceeds to the “Production” step of the tactical action.
`,`
STEP 3- SPACE CANNON DEFENSE: If the active player commits any ground forces to a planet that contains units that have the “Space Cannon” ability, those “Space Cannon” abilities can be used against the committed ground forces.

1. If the active player committed ground forces to more than one planet that contained units with a “Space Cannon” ability, the active player chooses the order in which those “Space Cannon” abilities are resolved.
`,`
STEP 4- GROUND COMBAT: If the active player has ground forces on a planet in the active system that contains another player’s ground forces, those players resolve a ground combat on that planet.

1. If players must resolve a combat on more than one planet, the active player chooses the order in which those combats are resolved.
`,`
STEP 5- ESTABLISH CONTROL: The active player gains control of each planet they committed ground forces to if that planet still contains at least one of their ground forces.

1. When a player gains control of a planet, any structures on the planet that belong to other players are immediately destroyed.
2. When a player gains control of a planet, they gain the planet card that matches that planet and exhaust that card.
3. A player cannot gain control of a planet they already control.
4. If there was a combat, and all units belonging to both players were destroyed, the player who was the defender retains control of the planet and places one of their control tokens on the planet.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADER SHEET',
    preamble: 'Each player has a leader sheet that contains slots for their faction’s three leader cards as well as their faction’s mech unit card.',
    subsections: [
      {
        name: '',
        items: [
`
The leader slots of the leader sheet are where players place their three leader cards during setup. Each slot displays the name of the type of leader that is placed in that slot (agent, commander, and hero) as well as a symbol in the upper-right that helps players quickly determine which side of those leaders begins the game faceup.

1. The sides of the leader cards that display one (agent), two (commander), or three (hero) hash marks, respectively, begin the game faceup.
`,`
The mech slot of the leader sheet is where players place their mech unit cards during setup.
`,`
Players who are familiar with the game can hide the quick reference by placing that portion of the leader sheet under their faction sheets.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADERS',
    preamble: 'Each player has several faction-specific leader cards that represent characters with unique abilities.',
    subsections: [
      {
        name: '',
        items: [
`
Each faction has three leaders; one agent, one commander, and one hero.

1. The Nomad’s “The Company” faction ability grants them two additional agents, for a total of five leaders.
`,`
A player’s leaders are placed on their leader sheet during setup.

1. Each leader card is placed on the slot that matches its type. The leader cards are placed so that the hash mark symbols in the upper right are faceup and match the slot that the card is placed on.
2. The two additional Nomad agents are placed in the Nomad player’s play area readied side up.
`
        ]
      },
      {
        name: 'Agents',
        items: [
`
An agent does not need to be unlocked and begins the game in a readied state. They can be exhausted by resolving their abilities, and they ready during the “Ready Cards” step of the status phase.
`
        ]
      },
      {
        name: 'COMMANDERS',
        items: [
`
A commander must be unlocked to use its abilities. A player unlocks their commander if they fulfill the conditions listed after the “Unlock” header.

1. Each faction’s commander has a unique “Unlock” condition.
2. After a player fulfills the unlock condition of their commander, they flip it over to its unlocked side.
3. A commander’s unlock conditions cannot be met while an ability or game effect is being resolved. That is, pending abilities or partially resolved game effects must be completed before checking if conditions are met.
4. A commander cannot flip to its locked side after it is unlocked, even if its owner no longer meets the unlock conditions.
`,`
A commander cannot be exhausted.
`,`
The “Alliance” promissory note allows a player to share their commander’s ability with another player.

1. A commander’s owner can still use their commander’s ability, even if another player has their “Alliance” promissory note.
`
        ]
      },
      {
        name: 'HEROES',
        items: [
`
A hero needs to be unlocked to use their abilities. A player unlocks their hero if they fulfill the conditions listed after the “Unlock” header.

1. The “Unlock” condition for each hero is to have three scored objectives; these can be any combination of secret objectives and public objectives.
2. Victory points do not count toward unlocking heroes.
3. After a player fulfills the unlock condition of their hero, they flip it to its unlocked side.
4. A hero cannot flip to its locked side after it is unlocked.
`,`
A hero cannot be exhausted.
`,`
A hero is purged after its abilities are resolved.

1. The Titans of Ul’s hero is not purged; it is attached to the planet Elysium instead.
`,
        ]
      }
    ]
  },
  {
    name: 'LEADERSHIP (STRATEGY CARD)',
    preamble: 'The “Leadership” strategy card allows players to gain command tokens. This card’s initiative value is “1.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Leadership” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Leadership” strategy card, the active player gains three command tokens. Then, that player can spend any amount of their influence to gain one command token for every three influence they spend.
`,`
After the active player resolves the primary ability of the “Leadership” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend any amount of influence to gain one command token for every three influence they spend.
`,`
When a player gains command tokens, that player places each token on their command sheet in the pool of their choice.
`,
        ]
      }
    ]
  },
  {
    name: 'LEGENDARY PLANETS',
    preamble: 'Legendary planets grant the player that controls them unique, planet-specific abilities.',
    subsections: [
      {
        name: '',
        items: [
`
A legendary planet is indicated by the legendary planet icon.
`,`
When a player gains control of a legendary planet, they also place its legendary planet ability card in their play area.

1. If a player gains control of a legendary planet ability card from the deck, it is readied.
2. If a player gains control of an exhausted legendary planet ability card, it remains exhausted.
`,`
Players can use the abilities on the legendary planet ability cards in their play area.
`,`
If a legendary planet’s planet card is purged, its corresponding legendary planet ability card is also purged.

`,
        ]
      }
    ]
  },
  {
    name: 'MECATOL REX',
    preamble: 'Mecatol Rex is the planet placed in the center of the game board during setup.',
    subsections: [
      {
        name: '',
        items: [
`
During setup, the custodians token is placed on Mecatol Rex. This token prevents a player from committing ground forces to land on the planet unless they spend six influence to remove the token.
`,
        ]
      }
    ]
  },
  {
    name: 'MECHS',
    preamble: 'Mechs are unique, faction-specific heavy ground forces.',
    subsections: [
      {
        name: '',
        items: [
`
Mechs are a type of ground force and can be transported and participate in ground combat.
`,`
Each player begins with their mech unit card in play on their leader sheet and can produce mechs for the cost presented on the card.
`,`
Some mechs have “Deploy” abilities which allow a player to place them on the game board without producing them normally.
`,`
Mech unit cards are not technologies.`,
        ]
      }
    ]
  },
  {
    name: 'MODIFIERS',
    preamble: 'A modifier is a number that is applied by an ability to increase or decrease the attribute values of a unit or the results of a die roll.',
    subsections: [
      {
        name: '',
        items: [
`
A modifier is always preceded by the word “apply” followed by a numerical value.
`,`
A modifier value preceded by a “+” is added to the attribute or result being modified; a modifier value preceded by a “-” is subtracted from the attribute or result being modified.
`,
        ]
      }
    ]
  },
  {
    name: 'MOVE (ATTRIBUTE)',
    preamble: 'Move is an attribute of some units that is presented on faction sheets and unit upgrade technology cards.',
    subsections: [
      {
        name: '',
        items: [
`
A unit’s move value indicates the distance from its current system that it can move during the “Movement” step of a tactical action.
`,
        ]
      }
    ]
  },
  {
    name: 'MOVEMENT',
    preamble: '',
    subsections: [
      {
        name: '',
        items: [
`
A player can move their ships by resolving a tactical action during the action phase. Additionally, some abilities can move a unit outside of the tactical action.
`,
        ]
      },
      {
        name: 'TACTICAL ACTION MOVEMENT',
        items: [
`
A ship’s move value is presented along with its other attributes on faction sheets and unit upgrade technology cards. This value indicates the distance from its current system that a ship can move.

To resolve movement, players perform the following steps:
`,`
STEP 1- MOVE SHIPS: A player can move any number of their eligible ships into the active system, obeying the
following rules:

1. The ship must end its movement in the active system.
2. The ship cannot move through a system that contains ships that are controlled by another player.
3. The ship cannot move if it started its movement in another system that contains one of its faction’s command tokens.
4. The ship can move through systems that contain its own faction’s command tokens.
5. The ship can move out of the active system and back into it if its move value is high enough.
6. The ship must move along a path of adjacent systems, and the number of systems the ship enters cannot exceed its move value.
`,`
When a ship with a capacity value moves or is moved, it may transport ground forces and fighters.
`,`
The active player declares which of their ships are moving before any ships move. Those ships arrive in the active system simultaneously.
`,`
STEP 2- SPACE CANNON OFFENSE: After the “Move Ships” step, players can use the “Space Cannon” abilities of their units in the active system.
`
        ]
      },
      {
        name: 'ABILITY MOVEMENT',
        items: [
`
If an ability moves a unit outside of the “Movement” step of a tactical action, players follow the rules specified by that ability; neither a unit’s move value nor the rules specified above apply.
`,
        ]
      }
    ]
  },
  {
    name: 'NEBULA',
    preamble: 'A nebula is an anomaly that affects movement and combat.',
    subsections: [
      {
        name: '',
        items: [
`
A ship can only move into a nebula if it is the active system. a A ship cannot move through a nebula. That is, a ship cannot move into and out of a nebula during the same movement.
`,`
A ship that begins the “Movement” step of a tactical action in a nebula treats its move value as “1” for the duration of that step.

1. Other abilities and effects can increase this number.
`,`
If a space combat occurs in a nebula, the defender applies +1 to each combat roll of their ships during that combat.

`,
        ]
      }
    ]
  },
  {
    name: 'NEIGHBORS',
    preamble: 'Two players are neighbors if they both have a unit or control a planet in the same system. They are also neighbors if they both have a unit or control a planet in systems that are adjacent to each other.',
    subsections: [
      {
        name: '',
        items: [
`
Players can resolve transactions with their neighbors.
`,`
Players are neighbors if the adjacency of systems is granted by a wormhole.
`,`
Players are neighbors with the Ghosts of Creuss if the Ghosts of Creuss’ “Quantum Entanglement” faction ability is causing adjacency from the perspective of the Ghosts of Creuss player.`,
        ]
      }
    ]
  },
  {
    name: 'OBJECTIVE CARDS',
    preamble: 'Players can score objectives to gain victory points.',
    subsections: [
      {
        name: '',
        items: [
`
There are two types of objective cards: public objectives and secret objectives.

1. Each public objective has a “I” or “II” on the back of its card; all other objectives are secret objectives.
`,`
Each objective card indicates a number of victory points that a player gains by scoring that objective.
`,`
Each objective card indicates the phase during which a player can score that objective-the status, action, or agenda phases.
`,`
Each objective card describes the requirement a player must fulfill to score that objective.
`,`
If a player fulfills the requirement described on an objective card, they can score that objective following the timing indicated on the card, either during the action phase or the status phase.

1. When a player scores an objective during the status phase, they must fulfill the requirement on the card during the “Score Objectives” step of the status phase to score that objective.
2. When a player scores an objective during the action phase, they can do so at any time during that phase.
3. When a player scores an objective during the agenda phase, they can do so at any time during that phase.
`,`
A player can score a maximum of one public objective and one secret objective during each status phase.
`,`
A player can score any number of objectives during the agenda phase or during a turn of the action phase; however, they can only score one objective during or after each combat.

1. A player can score an objective during both the space combat and the ground combat during the same tactical action.
`,`
A player can score each objective only once during the game.

`,`
If an objective requires a player to destroy one or more units, those units can be destroyed by producing hits against them, playing action cards, using technology, or any number of other abilities that use the “destroy” terminology.

1. Forcing a player to remove a unit from the board by reducing the number of command tokens in their fleet pool is not treated as destroying a unit.
`,`
Players can score some objectives by spending resources, influence, or tokens, as described by the objective card. To score such an objective, a player must pay the specified cost at the time indicated on the card.
`,
        ]
      },
      {
        name: 'PUBLIC OBJECTIVES',
        preamble: 'A public objective is an objective that is revealed to all players.',
        items: [
`
When scoring a public objective, the player places one of their control tokens on that objective’s card. Then, that player advances their control token on the victory point track a number of spaces equal to the number of victory points gained.
`,`
Each game contains five stage I and five stage II public objective cards that the speaker places facedown near the victory point track during setup.

1. The speaker reveals two of the stage I objective cards during setup. All other objective cards remain facedown.
`,`
During each status phase, the speaker reveals a facedown public objective card.

1. The speaker does not reveal stage II objective cards until all stage I objective cards are revealed.
`,`
If the speaker must reveal a facedown public objective card but all public objective cards are already revealed, the game ends immediately.

1. The player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner.
`,`
A player cannot score public objectives if that player does not control each planet in their home system.
`,
        ]
      },
      {
        name: 'SECRET OBJECTIVES',
        preamble: 'A secret objective is an objective that is controlled by one player and is hidden from all other players until it is scored.',
        items: [
`
When scoring a secret objective, a player reveals the objective by placing it faceup in their play area. Then, they place one of their control tokens on that objective’s card and advances their control token on the victory point track a number of spaces equal to the number of victory points gained.

`,`
A player can only score their own secret objectives; a player cannot score secret objectives revealed by other players.
`,`
Each player begins the game with one secret objective.
`,`
Each player can have up to three total scored and unscored secret objectives.

1. If a player draws a secret objective and has more than three, that player must choose one of their unscored secret objectives and return it to the deck. Then, that player shuffles the secret objective deck.
`,`
A player can gain secret objectives by resolving either the primary or secondary ability of the “Imperial” strategy card.
`,
        ]
      },
    ]
  },
  {
    name: 'OPPONENT',
    preamble: 'During combat, a player’s opponent is the other player that either has ships in the system at the start of the space combat or has ground forces on the planet at the start of a ground combat.',
    subsections: [
      {
        name: '',
        items: [
`
Players who do not have units on either side of a combat are not opponents. Those players cannot use abilities or have abilities used against them that are used against an opponent.
`,
        ]
      }
    ]
  },
  {
    name: 'PDS',
    preamble: 'A PDS (planetary defense system) is a structure that allows a player to defend their territory against invading forces.',
    subsections: [
      {
        name: '',
        items: [
`
Each PDS has the “Space Cannon” ability.
`,`
The primary way by which players acquire PDS units is by resolving either the primary or secondary ability of the “Construction” strategy card.
`,`
A PDS unit is placed on a planet. Each planet can have a maximum of two PDS units.
`,`
If a player’s PDS is ever on a planet that does not contain any of their own ground forces and contains a unit that belongs to another player, that PDS is destroyed.

`,
        ]
      }
    ]
  },
  {
    name: 'PLANETS',
    preamble: 'Planets provide players with resources and influence. Planets are on system tiles and each has a name, a resource value, and an influence value. Some planets also have traits.',
    subsections: [
      {
        name: '',
        items: [
`
A planet’s resources are indicated by the value on its planet card and system tile that is surrounded by a yellow triangular border.
`,`
A planet’s influence is indicated by the value on its planet card and system tile that is surrounded by a blue hexagonal border.
`,`
A planet’s trait has no inherent effects, but some game effects refer to a planet’s trait. There are three traits: cultural, hazardous, and industrial.

`,`
Some planets have a technology specialty, which allows those planets to be exhausted to satisfy a prerequisite when researching technology.
`,`
Some planets are legendary planets, as indicated by the legendary planet icon. When a player gains control of a legendary planet, they also gain control of its legendary planet ability card.
`,
        ]
      },
      {
        name: 'PLANET CARD',
        preamble: 'Each planet has a corresponding planet card that displays its name, resource value, influence value, and trait, if it has one. If a player controls a planet, they keep that planet’s card in their play area.',
        items: [
`
A planet card has both a readied and exhausted state. When a planet is readied, it is placed faceup. When a planet is exhausted, it is placed facedown.
`,`
A player can spend a readied planet’s resources or influence.
`,`
A player cannot spend an exhausted planet’s resources or influence.
`,
        ]
      },
    ]
  },
  {
    name: 'PLANETARY SHIELD (UNIT ABILITY)',
    preamble: 'Units cannot use the “Bombardment” ability against a planet that contains a unit that has the “Planetary Shield” ability.',
    subsections: [
      {
        name: '',
        items: [
`
The “Planetary Shield” ability does not prevent a planet from being affected by the “X-89 Bacterial Weapon” technology.
`,`
The “Planetary Shield” ability prevents an L1Z1X player from using their “Harrow” faction ability.
`,`
If a war sun is in a system with any number of other players’ units that have the “Planetary Shield” ability, those units are treated as if they do not have that ability.

1. Units treated as if they do not have a “Planetary Shield” ability cannot use the “Magen Defense Grid” technology.
2. A war sun can use its “Bombardment” ability against planets that contain units that have the “Planetary Shield” ability.
`,
        ]
      }
    ]
  },
  {
    name: 'POLITICS (STRATEGY CARD)',
    preamble: 'The “Politics” strategy card allows players to draw action cards. Additionally, the active player chooses a new speaker and looks at cards in the agenda deck. This card’s initiative value is “3.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Politics” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,{
  listType: 'i',
  content: `
To resolve the primary ability on the “Politics” strategy card, the active player resolves the following effects in order:

1. The active player chooses any player that does not have the speaker token. The active player may choose themselves as long as they do not have the speaker token. The chosen player places the speaker token in their play area; they are now the speaker.
2. The active player draws two action cards.
3.The active player secretly looks at the top two cards of the agenda deck. Then, that player places each card on either the top or the bottom of the deck. If they place both cards on either the top or bottom, they can place them in any order.
`
},`
After the active player resolves the primary ability of the “Politics” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to draw two action cards.
`,
        ]
      }
    ]
  },
  {
    name: 'PRODUCING UNITS',
    preamble: 'The primary way that a player produces new units is by resolving the “Production” abilities of existing units during a tactical action. However, other game effects also allow players to produce units.',
    subsections: [
      {
        name: '',
        items: [
`
Each unit that a player can produce has a cost value presented on its faction sheet or technology card. To produce a unit, a player must spend a number of resources equal to or greater than the cost value of the unit they are producing.

1. Spent resources must come from planets or trade goods that are controlled by the player who is producing the units.
2. Any resources spent in excess of a unit’s cost are lost.
3. If a player is producing multiple units at a time, that player can add the cost of each unit they are producing to create a total cost before they spend any resources.
`,`
If the cost is accompanied by two icons-typically for fighters and infantry-a player produces two of that unit for that cost.
1. Each of the two units counts toward the total number of units a player can produce.
2. A player can choose to produce only one unit; however, they must still pay the entire cost.
`,`
When a player produces a unit through the use of their units’ “Production” abilities during a tactical action, that player follows the rules of the “Production” ability to determine where in the active system the units can be placed.
`,`
When a player produces a unit through an ability outside of the tactical action, that ability will state how many units that player can produce and where that player can place those units.

1. A player cannot produce a unit on a planet they do not control.
2. If an ability allows a player to produce a unit in a system, they may produce that unit in the space area or on a planet they control in that system.
`,`
A player is limited by the number of units in their reinforcements.

1. If a player cannot produce a unit because it is not in their reinforcements, that player can remove a unit from any system that does not contain one of their command tokens and place that unit in their reinforcements. Then, that player can produce that unit. A player can remove any number of their units in this way; however, any units that are removed must be produced immediately.
2. When producing a fighter or infantry unit, a player can use a fighter or infantry token, as appropriate, from the supply instead of a plastic piece.
`,`
A player cannot produce ships in a system that contains other players’ ships. a Ground forces can still be produced.
`,
        ]
      }
    ]
  },
  {
    name: 'PRODUCTION (UNIT ABILITY)',
    preamble: 'During the “Production” step of a tactical action, the active player can resolve the “Production” ability of each of their units that are in the active system to produce units.',
    subsections: [
      {
        name: '',
        items: [
`
A unit’s “Production” ability, which is presented on a faction sheet or unit upgrade technology card, is always followed by a value. This value is the maximum number of units that this unit can produce.

1. If the active player has multiple units in the active system that have the “Production” ability, that player can produce a number of units up to the combined total of their units’ production values in that system.
2. When producing fighters or infantry, each individual unit counts toward the producing unit’s production limit.
3. A player can choose to produce one fighter or infantry instead of two, but must still pay the entire cost.
4. “Production” value from Arborec space docks cannot be used to produce infantry, even if the Arborec player controls other units that have “Production” in the same system.
`,`
When a player produces ships by using “Production,” that player must place them in the active system.
`,`
When a player produces ground forces, that player must place those unit on planets that contain a unit that used its “Production” ability.
`,`
If a player uses the “Production” ability of a unit in a space area of a system to produce ground forces, those ground forces may either be placed on a planet the player controls in that system or in the space area of that system.
`,
        ]
      }
    ]
  },
  {
    name: 'PROMISSORY NOTES',
    preamble: 'Each player begins the game with one unique and five generic promissory note cards that can be given to other players.',
    subsections: [
      {
        name: '',
        items: [
`
Each promissory note contains timing text and ability text. A player can resolve any of their promissory note cards by following the text on the card.
1. Promissory notes are not mandatory unless otherwise specified.
`,`
A player cannot play their color’s or faction’s promissory notes. Since the cards are only valuable to other players, promissory notes can be traded as powerful negotiation tools.
`,`
Promissory notes that are returned to a player are returned after their abilities have been completely resolved.
`,`
If a promissory note is returned to a player, that player may give it to other players again as part of a future transaction.

1. An unrevealed promissory note is not subject to effects in its ability text that return the card if certain conditions are met.
`,`
When resolving a transaction, a player can trade a maximum of one promissory note from their hand to another player, even if that card originally belonged to another player.

1. Promissory notes in the play area cannot be traded.
`,`
Players should keep their hands of promissory notes hidden.
`,`
If a player is eliminated, all of the promissory notes that match their color or faction are returned to the game box, including those that are in play or owned by other players.

1. Other players’ promissory notes are returned to those players.
`,
        ]
      }
    ]
  },
  {
    name: 'PURGE',
    preamble: 'Purge is a cost that permanently removes a component from the game. If an ability requires that its component is purged, that component can only be used once per game.',
    subsections: [
      {
        name: '',
        items: [
`
If an ability instructs a player to purge a component, that component is removed from the game and returned to the box.
`,`
Purged components cannot be used or otherwise returned to the game by any means.
`,`
When a player is intructed to purge a component, that component is purged even if its ability was only partially resolved.
`,
        ]
      }
    ]
  },
  {
    name: 'READIED',
    preamble: 'Cards have a readied state, which indicates that a player can exhaust or resolve the abilities on those cards.',
    subsections: [
      {
        name: '',
        items: [
`
A card that is readied is placed faceup in a player’s play area; a card that is exhausted is placed facedown in a player’s area.
`,`
A player can exhaust a readied planet card to spend resources or influence from that card’s planet.
`,`
A player can exhaust certain readied technology cards to resolve those cards’ abilities.

1. Such a technology will specifically instruct a player to exhaust the card as part of the ability’s cost.
`,`
If a card is exhausted, a player cannot resolve that card’s abilities or spend resources or influence on that card until it is readied.
`,`
During a “Ready Cards” step, each player readies all of their exhausted cards by flipping them faceup.
`,`
When a player performs a strategic action, they exhaust their chosen strategy card.

1. That card is later readied during the status phase.
`,
        ]
      }
    ]
  },
  {
    name: 'REINFORCEMENTS',
    preamble: 'A player’s reinforcements is that player’s personal supply of units and command tokens that are not on the game board or otherwise in use.',
    subsections: [
      {
        name: '',
        items: [
`
The components in a player’s reinforcements are limited.
`,
        ]
      }
    ]
  },
  {
    name: 'RELICS',
    preamble: 'Relics are powerful artifacts with unique abilities.',
    subsections: [
      {
        name: '',
        items: [
`
Players can use the abilities of hazardous, cultural, and industrial relic fragments in their play area to draw cards from the relic deck.

1. Relic fragments can be found when exploring planets and frontier tokens, and can be exchanged with other players as part of transactions.
`,`
When a player is instructed to gain a relic, they draw the top card of the relic deck and place it faceup in their play area.

1. If there are no cards in the relic deck, they do not gain a relic.
`,`
A player can use the abilities of relics that are in their play area.
`,`
Relics cannot be traded.
`,
        ]
      }
    ]
  },
  {
    name: 'REROLLS',
    preamble: 'Some game effects instruct a player to reroll dice.',
    subsections: [
      {
        name: '',
        items: [
`
When a die is rerolled, its new result is used instead of its previous result.
`,`
The same ability cannot be used to reroll the same die multiple times, but multiple abilities can be used to reroll a single die.
`,`
Die rerolls must occur after rolling the dice, before other abilities are resolved.
`,
        ]
      }
    ]
  },
  {
    name: 'RESOURCES',
    preamble: 'Resources represent a planet’s material value and industry. Many game effects, such as producing units, require players to spend resources.',
    subsections: [
      {
        name: '',
        items: [
`
A planet’s resources are the leftmost value that is surrounded by a yellow border on the planet’s system tile and planet card.
`,`
A player spends a planet’s resources by exhausting its card.
`,`
A player can spend a trade good as if it were one resource.
`,
        ]
      }
    ]
  },
  {
    name: 'SHIPS',
    preamble: 'A ship is a unit type consisting of carriers, cruisers, dreadnoughts, destroyers, fighters, and war suns. Each race also has a unique flagship.',
    subsections: [
      {
        name: '',
        items: [
`
Ships are always placed in space.
`,`
A player can have a number of ships in a system equal to or less than the number of command tokens in that player’s fleet pool. a Fighters do not count toward the fleet pool limit, and instead count against a player’s capacity.
`,`
Ships can have any number of the following attributes: cost, combat, move, and capacity. These attributes are shown on faction sheets and unit upgrade technology cards.
`,
        ]
      }
    ]
  },
  {
    name: 'SPACE CANNON (UNIT ABILITY)',
    preamble: 'A unit that has the “Space Cannon” ability can use it during two different steps of a player’s tactical action: after the “Move Ships” substep (Space Cannon Offense) and during an invasion (Space Cannon Defense).',
    subsections: [
      {
        name: '',
        items: [
`
A player is not required to be the active player to use their “Space Cannon” ability of their units.
`,
        ]
      },
      {
        name: 'SPACE CANNON OFFENSE',
        preamble: 'During a tactical action, after the “Move Ships” substep of the “Movement” step, beginning with the active player and proceeding clockwise, each player may use the “Space Cannon” ability of each of their units in the active system by performing the following steps:',    
        items: [
`
STEP 1- ROLL DICE: The player rolls dice for each of their units in the active system that has the “Space Cannon” ability; this is a space cannon roll. One hit is produced for each result that is equal to or greater than the unit’s “Space Cannon” value.

1. A unit’s “Space Cannon” ability is presented along with a unit’s attributes on faction sheets and unit upgrade technology cards.
2. “Space Cannon” is displayed as “Space Cannon X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Space Cannon” abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.
3. If a player has a PDS unit upgrade technology, they can use the “Space Cannon” ability of their PDS units that are in systems that are adjacent to the active system. The hits are still assigned to units in the active system.
4. Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.
`,`
This ability can be used even if no ships were moved during the “Move Ships” step.
`,`
STEP 2- ASSIGN HITS: The player whose units have been targeted by “Space Cannon” must choose and destroy one of their ships in the active system for each hit result produced against their units.

1. Players other than the active player must target the active player’s units.
2. If the active player is using the “Space Cannon” ability of their units, they choose a player who has ships in the active system. That player must choose and destroy one of their ships in the active system for each hit the space cannon roll produced.
`,
        ]
      },
      {
        name: 'SPACE CANNON DEFENSE',
        preamble: 'During the invasion step of a tactical action, after ground forces have been committed to land on planets, players other than the active player can resolve the “Space Cannon” ability of their units on those planets by performing the following steps:',
        items: [
`
STEP 1- ROLL DICE: Each player may use the “Space Cannon” ability of each of their units on the invaded planet by rolling a specific number of dice for each of those units; this is called a space cannon roll. A hit is produced for each die roll that is equal to or greater than the unit’s “Space Cannon” value.

1. If a unit has a “Space Cannon” ability, it is present on its faction sheet and technology cards.
2. “Space Cannon” is displayed as “Space Cannon X (xY).” The X is the minimum value needed for a die to produce a hit, and Y is the number of dice rolled. Not all “Space Cannon” abilities are accompanied by a (Y) value; a space cannon roll for such a unit consists of one die.
3. Game effects that reroll, modify, or otherwise affect combat rolls do not affect space cannon rolls.
4. Game effects that allow the use of “Space Cannon” abilities against ships in adjacent systems have no effect during Space Cannon Defense.
`,`
STEP 2- ASSIGN HITS: The active player must choose and destroy one of their ground forces on the planet for each hit the space cannon roll produced.

1. Hits can only be assigned to units that are on the same planet as the units using the “Space Cannon” ability.
`,
        ]
      },
    ]
  },
  {
    name: 'SPACE COMBAT',
    preamble: 'After resolving the “Space Cannon Offense” step of a tactical action, if two players have ships in the active system, those players must resolve a space combat.',
    subsections: [
      {
        name: '',
        items: [
`
If the active player is the only player with ships in the system, they skip the “Space Combat” step of the tactical action and proceeds to the “Invasion” step.
`,`
If an ability occurs “before combat,” it occurs immediately before the “Anti-Fighter Barrage” step.

1. During the first round of a combat, “start of combat” and “start of combat round” effects occur during the same timing window.
2. During the last round of a combat, “end of combat” and “end of combat round” effects occur during the same timing window.

To resolve a space combat, players perform the following steps:
`,
{
  name: 'STEP 1- ANTI-FIGHTER BARRAGE',
  content: `
  If this is the first round of a space combat, the players may simultaneously use the “Anti-Fighter Barrage” ability of any of their units in the active system.
  
  1. If one or both players no longer have ships in the active system after resolving this step, the space combat ends immediately.
  2. Players cannot resolve “Anti-Fighter Barrage” abilities during any rounds of space combat other than the first round.
  3. This step still occurs if no fighters are present.
  `
}, {
  name: 'STEP 2- ANNOUNCE RETREATS',
  content: `
Each player may announce a retreat, beginning with the defender.

1. A retreat will not occur immediately; the units retreat during the “Retreat” step.
2. If the defender announces a retreat, the attacker cannot announce a retreat during that combat round.
3. A player cannot announce a retreat if there is not at least one eligible system to retreat to.
`
}, {
  name: 'STEP 3- ROLL DICE',
  content: `
Each player rolls one die for each ship they have in the active system; this is called a combat roll. If a unit’s combat roll produces a result that is equal to or greater than that unit’s combat value, that result produces a hit.

1. If a unit’s combat value contains two or more burst icons, the player rolls one die for each burst icon instead.
2. If a player has ships that have different combat values in the active system, that player rolls these dice separately.
3. First, that player should roll all dice for units with a combat value of “1.” Then, that player should roll all dice for units with combat value of “2,” and then “3,” continuing in numerical order until that player has rolled dice for each of their ships.
4. The player counts each hit their combat rolls produce. The total number of hits produced will destroy units during the “Assign Hits” step.
5. If a player has an ability that rerolls a die or affects a die after it is rolled, that player must resolve such an ability immediately after rolling all of their dice.
6. The attacker makes all of their combat rolls during this step before the defender. This procedure is important for abilities that allow a player to reroll an opponent’s die.
`
}, {
  name: 'STEP 4- ASSIGN HITS',
  content: `
Each player in the combat must choose and destroy one of their own ships in the active system for each hit their opponent produced.

1. Before assigning hits, players may use their units’ “Sustain Damage” abilities to cancel hits.
2. When a unit is destroyed, the player who controls that unit removes it from the board and places it in their reinforcements.
`
}, {
  name: 'STEP 5- RETREAT',
  content: `
If a player announced a retreat during step 2, and there is still an eligible system for their units to retreat to, they must retreat.

1. If a player announced a retreat during the “Announce Retreats” step, but their opponent has no ships remaining in the system, the combat immediately ends and the retreat does not occur.
2. To retreat, a player takes all of their ships with a move value in the combat and moves them to a single system that is adjacent to the active system. That player’s fighters and ground forces in the space area of the active system that are unable to move or be transported are removed.
3. The system that a player’s units retreat to must contain one or more of that player’s units, a planet they control, or both. Additionally, the system cannot contain ships controlled by another player.
4. If any of a player’s units successfully retreat and are moved into an adjacent system, that player must place a command token from their reinforcements in the system to which their units retreated. If that system already contains one of their command tokens, that player does not place an additional token there. If the player has no command tokens in their reinforcements, that player must use one from their command sheet instead.
`
},
`
After the “Retreat” step, if both players still have ships in the active system, those players resolve another round of space combat beginning with the “Announce Retreats” step.
`,`
Space combat ends when only one player-or neither player- has a ship in the space area of the active system. a During the last round of a combat, “end of combat” and “end of combat round” effects occur during the same timing window.
`,`
After a combat ends, the player with one or more ships remaining in the system is the winner of the combat; the other player is the loser of the combat. If neither player has a ship remaining, the combat ends in a draw and there is no winner.

1. If the winner of the combat has fighters or ground forces in the space area of the active system and those units exceed the capacity of that player’s ships in that system, that player must choose and remove any excess units.
`,
        ]
      }
    ]
  },
  {
    name: 'SPACE DOCK',
    preamble: 'A space dock is a structure that allows players to produce units.',
    subsections: [
      {
        name: '',
        items: [
`
Each space dock has a “Production” ability that indicates the number of units it can produce.
`,`
The primary way in which players acquire space docks is by resolving either the primary or secondary abilities of the “Construction” strategy card.
`,`
Space docks are placed on planets. Each planet can have a maximum of one space dock.
`,`
If a player’s space dock is ever on a planet that does not contain any of their ground forces and contains a unit that belongs to another player, that space dock is destroyed.

1. The Clan of Saar’s “Floating Factory” faction-specific space dock is destroyed when it is blockaded; that is to say, when it is in a system with another player’s ships and none of the Clan of Saar’s ships.
`,
        ]
      }
    ]
  },
  {
    name: 'SPEAKER',
    preamble: 'The speaker is the player who has the speaker token.',
    subsections: [
      {
        name: '',
        items: [
`
During the strategy phase, the speaker is the first player to choose a strategy card.
`,`
During the agenda phase, the speaker reveals the top agenda card from the agenda deck before each vote. The speaker is always the last player to vote and decides which outcome to resolve if the outcomes are tied.
`,`
During setup, the speaker prepares the objectives.
`,`
During the status phase, the speaker reveals a public objective.
`,`
A random player gains the speaker token during setup before the game begins.
`,`
During the action phase, if a player resolves the primary ability on the “Politics” strategy card, that player chooses any player other than the current speaker to gain the speaker token.
`,`
If the speaker is eliminated from the game, the speaker token is passed to the player to the speaker’s left.
`,
        ]
      }
    ]
  },
  {
    name: 'STATUS PHASE',
    preamble: 'During the status phase, players score objectives and prepare for the next game round. To resolve the status phase, players perform the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- SCORE OBJECTIVES: Following initiative order, each player may score up to one public objective and one secret objective that can be fulfilled during the status phase. To score an objective, a player must fulfill the requirements on the card; if that player does, they gain a number of victory points indicated on the card.
`,`
STEP 2- REVEAL PUBLIC OBJECTIVE: The speaker reveals an unrevealed public objective card by flipping that card faceup.

1. The speaker cannot reveal “Stage II” objectives until all “Stage I” objectives are revealed.
2. The game ends if there are no unrevealed public objectives at the start of this step.
`,`
STEP 3- DRAW ACTION CARDS: Following initiative order, each player draws one action card.
`,`
STEP 4- REMOVE COMMAND TOKENS: Each player removes all of their command tokens from the game board. Each player returns each removed token to their reinforcements.
`,`
STEP 5- GAIN AND REDISTRIBUTE COMMAND TOKENS: Each player gains two command tokens. A player takes each gained token from their reinforcements. Then, each player can redistribute each command token on their command sheet, including the two they just gained, among their strategy, tactic, and fleet pools.

1. Players should remember to check the number of their ships in each system after reducing the size of their fleet pools.
2. This step can usually be resolved simultaneously, but if there is a timing conflict, it is resolved in initiative order.
`,`
STEP 6- READY CARDS: Each player readies all of their exhausted cards, including strategy cards.
`,`
STEP 7- REPAIR UNITS: Each player repairs all of their damaged units by turning those units upright.
`,`
STEP 8- RETURN STRATEGY CARDS: Each player returns their strategy card to the common play area. Then, if a player has removed the custodians token from Mecatol Rex, the game round continues to the agenda phase. Otherwise, a new game round begins with the strategy phase.
`,
        ]
      }
    ]
  },
  {
    name: 'STRATEGIC ACTION',
    preamble: 'During the action phase, the active player may perform a strategic action to resolve the primary ability on their strategy card.',
    subsections: [
      {
        name: '',
        items: [
`
After the active player resolves the primary ability on their strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may resolve that strategy card’s secondary ability.

1. Players do not have to resolve the secondary abilities of the active player’s strategy card.
`,`
After each player has had an opportunity to resolve a strategy card’s secondary ability, the active player exhausts their strategy card so that it is facedown-this indicates that they cannot use this card again this round and is a reminder that they can now pass during one of their later turns.

1. During three- and four-player games, a player must resolve the strategic action on each of their chosen strategy cards before they can pass.
`,`
When a player is resolving either the primary or secondary abilities from a strategy card, that player resolves each of the ability’s effects from top to bottom.

`,
        ]
      }
    ]
  },
  {
    name: 'STRATEGY CARD',
    preamble: 'Strategy cards determine initiative order and provide each player with a powerful ability that they can use one time during the action phase.',
    subsections: [
      {
        name: '',
        items: [
`
During the strategy phase, each player chooses a strategy card from the common play area and places it in their play area faceup.
`,`
Each strategy card has a readied and an exhausted side.

1. The readied side contains the strategy card’s name, initiative number, and abilities.
2. The exhausted side contains the strategy card’s initiative number.
`,`
A player can only resolve the primary ability of their own strategy cards.
`,`
A player can only resolve the secondary ability of strategy cards that were chosen by other players.
`,`
There are eight strategy cards, each of which has a name and an initiative number.
`,`
The initiative number on a player’s strategy card determines the initiative order for the action phase and status phase.
`,`
A strategy card has both a primary ability and a secondary ability. These abilities are resolved during a strategic action.
`,`
Each strategy card exists in either the common play area or a player’s play area.

1. Strategy cards in the common play area are available for players to choose during the strategy phase.
2. A strategy card in a player’s play area belongs to that player until it is returned to the common play area during the status phase.
`,
        ]
      }
    ]
  },
  {
    name: 'STRATEGY PHASE',
    preamble:
`During the strategy phase, each player chooses a strategy card to use during the round.

To resolve the strategy phase, players perform the following steps:
`,
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- Starting with the speaker and proceeding clockwise, each player chooses one strategy card from the common play area and places it faceup in their play area.

1. If there are one or more trade good tokens on a strategy card when a player chooses it, that player gains those trade goods.
2. A player cannot choose a strategy card that another player has already chosen during the current strategy phase.
3. When playing with three or four players, each player will choose a second strategy card. After the last player has received their first strategy card, each player chooses
4. second strategy card, starting with the speaker and proceeding clockwise.
`,`
STEP 2- The speaker places one trade good token from the supply on each strategy card that was not chosen.

1. During a four- or eight-player game, all strategy cards will be chosen, and therefore no trade good tokens will be placed on strategy cards. Then, players proceed to the action phase.
`,
        ]
      }
    ]
  },
  {
    name: 'STRUCTURES',
    preamble: 'A structure is a type of unit. PDS units and space docks are structures.',
    subsections: [
      {
        name: '',
        items: [
`
Structures are always placed on planets.

1 The Clan of Saar’s “Floating Factory” faction-specific space dock is placed in a system’s space area.
`,`
Structures are primarily placed on planets using the “Construction” strategy card.
`,`
Structures cannot move or be transported.
`,`
A player can have a maximum of one space dock on each planet.
`,`
A player can have a maximum of two PDS units on each planet.
`,`
A player cannot place a structure on a planet if it would exceed the maximum number of allowed structures of that type on that planet.
`,
        ]
      }
    ]
  },
  {
    name: 'SUPERNOVA',
    preamble: 'A supernova is an anomaly that affects movement.',
    subsections: [
      {
        items: ['A ship cannot move through or into a supernova.']
      }
    ]
  },
  {
    name: 'SUSTAIN DAMAGE (UNIT ABILITY)',
    preamble: 'Some units have the “Sustain Damage” ability. Immediately before a player assigns hits to their units, that player can use the “Sustain Damage” ability of any of their units in the active system.',
    subsections: [
      {
        name: '',
        items: [
`
For each “Sustain Damage” ability that a player uses, one hit produced by another player’s units is canceled. Then, each unit using this ability is placed on its side to indicate that it is damaged.
`,`
A damaged unit does not have reduced capabilities and is functionally the same as an undamaged unit, except that it cannot use the “Sustain Damage” ability.
`,`
A damaged unit cannot use the “Sustain Damage” ability until it is repaired during the status phase or by another game effect.
`,`
A unit can use its “Sustain Damage” ability any time a hit is produced against it. This includes hits produced during combat and from unit abilities such as the “Space Cannon” ability.

1. A unit can only use the “Sustain Damage” ability if it is eligible to be hit. For example, a player cannot use a dreadnought’s “Sustain Damage” ability to cancel a hit from “Anti-Fighter Barrage.”
`,`
The “Sustain Damage” ability cannot be used to cancel an effect that directly destroys a unit.
`,`
The Barony of Letnev’s “Non-Euclidean Shielding” faction technology allows the Letnev player’s units with the “Sustain Damage” ability to cancel up to two hits instead of one.
`,
        ]
      }
    ]
  },
  {
    name: 'SYSTEM TILES',
    preamble: 'A system tile represents an area of the galaxy. Players place system tiles during setup to create the game board.',
    subsections: [
      {
        name: '',
        items: [
`
The back of each system tile is colored green, blue, or red.
`,`
System tiles with a green-colored back are home systems and faction-specific tiles. Each home system is unique to one of the game’s factions.
`,`
System tiles with a blue-colored back each contain one or more planets.
`,`
System tiles with a red-colored back are anomalies or are systems that do not contain planets.
`,`
Planets are located in systems. Ground forces and structures are usually placed on planets.
`,`
Any area on a system tile that is not a planet is space. Ships are usually placed in the space area.
`,`
Double-sided tiles that have lines crossing from one edge to another are hyperlane tiles. Hyperlane tiles are not systems.
`,
        ]
      }
    ]
  },
  {
    name: 'TACTICAL ACTION',
    preamble: 'The tactical action is the primary method by which players produce units, move ships, and extend their dominion within the galaxy. To perform a tactical action, the active player performs the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- ACTIVATION: The active player must activate a system that does not contain one of their command tokens.

1. To activate a system, the active player places a command token from their tactic pool in that system. That system is the active system.
2. Other players’ command tokens do not prevent a player from activating a system.
`,`
STEP 2- MOVEMENT: The active player may move any number of ships that have a sufficient move value from any number of systems that do not contain one of their command tokens into the active system, following the rules for movement.

1. Ships that have capacity values can transport ground forces and fighters when moving.
2. The player may choose to not move any ships.
3. After the “Move Ships” step, all players can use the “Space Cannon” abilities of their units in the active system.
`,`
STEP 3- SPACE COMBAT: If two players have ships in the active system, those players must resolve a space combat.

1. If the active player is the only player with ships in the system, they skip this step.
`,`
STEP 4- INVASION: The active player may use their “Bombardment” abilities, commit units to land on planets, and resolve ground combat against other players’ units.
`,`
STEP 5- PRODUCTION: The active player may resolve each of their unit’s “Production” abilities in the active system.

1. The active player may do this even if they did not move units or land ground forces during this tactical action.
`,
        ]
      }
    ]
  },
  {
    name: 'TECHNOLOGY',
    preamble: 'Technology cards allow players to upgrade units and acquire powerful abilities.',
    subsections: [
      {
        name: '',
        items: [
`
Each player places any technology they have gained faceup near their faction sheet. For the duration of the game, they own any technology cards they gain and can use the abilities on those cards.
`,`
A player does not own any technology card that is in their technology deck.
`,`
A player can gain a technology card from their technology deck by researching technology.

1. Both the primary and secondary abilities of the “Technology” strategy card allow a player to research a technology.
`,`
Any technology card that a player has not gained remains in their technology deck. A player can look through their technology deck at any time.
`,`
If an ability instructs a player to gain a technology, they do not research it; they take it from their technology deck and place it in their play area, ignoring prerequisites.
`,`
Some technologies are unit upgrades. Unit upgrades share a name with a unit that is printed on a player’s faction sheet.

1. Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.
`,`
Each technology that is not a unit upgrade has a colored symbol displayed in the lower-right corner of the card and on its card back that indicates that technology’s color.

1. A technology’s color has no inherent game effect; however, each technology a player owns can satisfy a prerequisite of a matching color when researching other technology.
2. Unit upgrades do not have a color and do not satisfy prerequisites.
3. There are four colors of technologies as follows:
  * Biotic
  * Warfare
  * Propulsion
  * Cybernetic
`,`
Most technology cards have a column of colored symbols displayed in the lower-left corner of the card. Each symbol in this column is a prerequisite.

1. A technology card’s prerequisites indicate the number and color of technologies a player must own to research that technology card.
`,
{
  name: 'RESEARCHING TECHNOLOGY',
  content: 'A player can research technology by resolving either the primary or secondary ability of the “Technology” strategy card during the action phase. Other game effects may also instruct a player to research technology.'
},
`
To research technology, a player gains that technology card from their technology deck and places it in their play area near their faction sheet.

1. Players place any unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.
`,`
A player cannot research a faction technology that does not match their faction.
`,`
When researching technology, a player must satisfy each of a technology’s prerequisites to research it. To satisfy a technology’s prerequisites, that player must own one technology of the matching color for each prerequisite symbol on the technology card they wish to research.

1. Prerequisites symbols are displayed as symbols on the lower-left corner of the card.
2. Unit upgrade technologies do not have a color and do not satisfy prerequisites.
3. Players may use certain abilities or technology specialties to ignore some prerequisites.
`,
{
  name: 'TECHNOLOGY SPECIALTIES',
  content: 'A technology specialty is a technology symbol found on some planets.'
},
`
When researching technology, a player can exhaust a planet they control that has a technology specialty to ignore one prerequisite symbol of the matching type on the technology card they are researching.
`,`
If the planet card is already exhausted, it cannot be used to ignore a prerequisite.
`,
{
  name: 'VALEFAR ASSIMILATOR',
  content: 'The Nekro Virus faction can use its faction abilities in combination with its two “Valefar Assimilator” faction technologies to gain faction technologies that have been researched by other players, including unit upgrades.'
},
`
Basic units printed on faction sheets are not technologies and are not eligible targets for “Valefar Assimilator.”
`,`
If a player becomes eliminated while one of their technologies has a Valefar Assimilator token on it, the Nekro Virus player places that technology in their play area; it is not removed from the game.
`,`
If a Valefar Assimilator token is removed from the Saar “Floating Factory” unit upgrade, each of the Nekro Virus’ space docks must be placed on an eligible planet they control in that space dock’s system, or the space dock is returned to their reinforcements.
`,`
If a Valefar Assimilator token is removed from a war sun unit upgrade and the Nekro Virus player does not have the standard war sun unit upgrade, each of the Nekro Virus player’s war suns are returned to their reinforcements.
`,`
The Nekro Virus player may upgrade their units with units of the same type (e.g., “dreadnought” or “infantry”) even if those unit’s names do not match. If the Nekro Virus gains a unit upgrade technology of the same unit type as a unit upgrade technology they already have, the previous upgrade is removed, and they must use the same Valefar Assimilator token that was used to copy the previous upgrade.
`,`
When a Valefar Assimilator token is on a technology, that technology’s color and type count toward objectives.
`
        ]
      }
    ]
  },
  {
    name: 'TECHNOLOGY (STRATEGY CARD)',
    preamble: 'The “Technology” strategy card allows players to research new technology. This card’s initiative value is “7.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Technology” strategy card, they can perform a strategic action to resolve that card’s primary ability.
`,`
To resolve the primary ability on the “Technology” strategy card, the active player can research one technology of their choice. Then, they may research one additional technology of their choice by spending six resources.
`,`
After the active player resolves the primary ability of the “Technology” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may research one technology of their choice by spending one command token from their strategy pool and four resources.
`,
        ]
      }
    ]
  },
  {
    name: 'TRADE (STRATEGY CARD)',
    preamble: 'The “Trade” strategy card allows players to gain trade goods and replenish commodities. This card’s initiative value is “5.”',
    subsections: [
      {
        name: '',
        items: [
`
During the action phase, if the active player has the “Trade” strategy card, they can perform a strategic action to resolve that card’s primary ability. To resolve the primary ability on the “Trade” strategy card, the active player resolves the following effects in order:
`,`
STEP 1- The active player gains 3 trade goods.
`,`
STEP 2- The active player replenishes their commodities by taking the number of commodity tokens necessary to have an amount equal to the commodity value on their faction sheet. Then, they place those tokens in the commodity area of their faction sheet.

1. A player cannot have more commodities than the commodity value printed on their faction sheet.
`,`
STEP 3- The active player chooses any number of other players. Those players use the secondary ability of this card without spending a command token.

1. The chosen players must resolve the secondary ability of this card without spending a command token after the active player finishes resolving the primary ability
2. The chosen players can only use the secondary ability once, and they cannot use it by spending command tokens.
`,`
After the active player resolves the primary ability of the “Trade” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to replenish their commodities.
`,
        ]
      }
    ]
  },
  {
    name: 'TRADE GOODS',
    preamble: 'A trade good represents a player’s buying and trading power beyond their planet’s raw resources.',
    subsections: [
      {
        name: '',
        items: [
`
Trade goods and commodities are represented by opposite sides of the same token.
`,`
When a player gains a trade good, they take a trade good token from the supply and place it on the trade good area on their command sheet, making sure the trade good side is faceup.
`,`
A player can spend trade goods at any time during the game.
`,`
A player can spend a trade good in one of the following ways:

1. In place of spending one resource.
2. In place of spending one influence. However, trade goods cannot be spent to cast votes during the agenda phase.
3. To resolve an effect that specifically requires that a trade good be spent.
`,`
A player can exchange their trade goods with other players during a transaction.
`,`
When a player receives a commodity token from another player, the player who received that token places it in their trade good area with the trade good side of the token faceup. a That token is no longer a commodity token; it is a trade good token.
`,`
Trade good tokens come in values of one and three. A player can swap between these tokens as necessary.
`,
        ]
      }
    ]
  },
  {
    name: 'TRANSACTIONS',
    preamble: 'A transaction is a way for a player to exchange commodities, trade goods, promissory notes, and relic fragments.',
    subsections: [
      {
        name: '',
        items: [
`
During the active player’s turn, they may resolve up to one transaction with each of their neighbors.

1. A player can resolve a transaction at any time during their turn, even during a combat.
`,`
To resolve a transaction, a player gives any number of trade goods and commodities and up to one promissory note to a neighbor in exchange for any number of trade goods, commodities, and relic fragments, and up to one promissory note.
`,`
Players can exchange commodities, trade goods, promissory notes, and relic fragments, but cannot exchange other types of cards or tokens.

1. The Emirates of Hacan can also exchange action cards with other players as part of their transactions.
`,`
A transaction does not have to be even. A player may exchange components of unequal value or give components without receiving something in return.

1. The players agree on the terms of the transaction before exchanging any components. After the components are traded, the transaction cannot be undone.
`,`
Players can resolve a transaction as part of a deal.
`,`
While resolving each agenda during the agenda phase, a player may perform one transaction with each other player.

1. Players do not need to be neighbors to perform these transactions.
`,
        ]
      }
    ]
  },
  {
    name: 'TRANSPORT',
    preamble: 'When a ship moves, it may transport any combination of fighters and ground forces, but the number of units it transports cannot exceed that ship’s capacity value.',
    subsections: [
      {
        name: '',
        items: [
`
The ship can pick up and transport fighters and ground forces when it moves. During a tactical action, it can pick up and transport units from the active system, the system it started its movement in, and each system it moves through.

1. These transported units remain with the transporting ship until it is finished moving.
2. Units being transported by a ship that is removed from the board by a gravity rift are also removed from the board.
`,`
Any fighters and ground forces that a ship transports must move with the ship and remain in the space area of a system.
`,`
Fighters and ground forces cannot be picked up from a system that contains one of their faction’s command tokens other than the active system.
`,`
A player can land ground forces on a planet in a system during the “Invasion” step of a tactical action.
`,
        ]
      }
    ]
  },
  {
    name: 'UNITS',
    preamble: 'A unit is represented by a plastic figure.',
    subsections: [
      {
        name: '',
        items: [
`
There are three types of units: ships, ground forces, and structures.
`,`
Each color of plastic comes with the following units:

* 3 Space Docks
* 6 PDS units
* 8 Destroyers
* 8 Cruisers
* 2 War Suns
* 12 Infantry
* 10 Fighters
* 4 Carriers
* 5 Dreadnoughts
* 1 Flagship
* 4 Mechs
`,`
Units exist either on the game board or in a player’s reinforcements.
`,
        ]
      }
    ]
  },
  {
    name: 'UNIT UPGRADES',
    preamble: 'A unit upgrade is a type of technology card.',
    subsections: [
      {
        name: '',
        items: [
`
Unit upgrades share a name with a unit that is printed on a player’s faction sheet, but have a higher roman numeral. For example, a player’s “Carrier I” unit is upgraded by the unit upgrade technology “Carrier II.”

1. The Nekro Virus player may upgrade their units with units of the same type (e.g., “dreadnought” or “infantry”) even if those unit’s names do not match. If the Nekro Virus gains a unit upgrade technology of the same unit type as a unit upgrade technology they already have, the previous upgrade is removed, and they must use the same Valefar Assimilator token that was used to copy the previous upgrade.
`,`
Players place unit upgrades they gain faceup on their faction sheets, covering the unit that shares a name with that upgrade card.
`,`
The white arrows next to an attribute on a faction sheet indicate that the attribute will improve when the unit is upgraded.
`,`
After a player gains a unit upgrade card, each of that player’s units that correspond to that upgrade card is treated as having the attributes and abilities printed on that upgrade card. Any previous attributes of that unit, such as the one printed on that player’s faction sheet, are ignored.
`,`
A mech unit card is not a technology.
`,
        ]
      }
    ]
  },
  {
    name: 'VICTORY POINTS',
    preamble: 'The first player to gain 10 victory points wins the game.',
    subsections: [
      {
        name: '',
        items: [
`
Players gain victory points in a variety of ways. A common way that a player can gain victory points is by scoring objectives.
`,`
Each player uses the victory point track to indicate the number of victory points they have gained.

1. If the players are using the 14-space side of the victory point track, the game ends and a player wins when they have 14 victory points instead of 10.
`,`
Each player places one of their control tokens on space “0” of the victory point track during setup.
`,`
When a player gains a victory point, they advance their control token a number of spaces along the victory point track equal to the number of victory points gained.

1. A player’s control token must always be on the space of the victory point track that shows a number that matches the number of victory points that player has gained during the game. A player cannot have more than 10 victory points.
`,`
If an ability refers to the player with the “most” or “fewest” victory points, and more than one player is tied in that respect, the effect applies to all of the tied players.
`,`
If a player gains a victory point from a law, and that law is discarded, that player does not lose that victory point.
`,`
The game ends immediately when one player has 10 victory points. If multiple players would simultaneously gain their 10th victory point, the player who is earliest in initiative order among those players is the winner; if this occurs when players do not have strategy cards, the player who is nearest the speaker (including the speaker) in clockwise order is the winner.
`,`
If the game ends because the speaker cannot reveal an objective card, the player with the most victory points is the winner. If one or more players are tied for having the most victory points, the tied player who is first in initiative order is the winner. 
`,
        ]
      }
    ]
  },
  {
    name: 'WARFARE (STRATEGY CARD)',
    preamble: 'The “Warfare” strategy card allows a player to remove a command token from the board and redistribute their command tokens between their tactic, fleet, and strategy pools. This card’s initiative value is “6.” During the action phase, if the active player has the “Warfare” strategy card, they can perform a strategic action to resolve that card’s primary ability. To resolve the primary ability on the “Warfare” strategy card, the active player performs the following steps:',
    subsections: [
      {
        name: '',
        items: [
`
STEP 1- The active player removes any one of their command tokens from the game board. Then, that player gains that command token by placing it in a pool of their choice on their command sheet.
`,`
STEP 2- The active player can redistribute their command tokens.
`,`
After the active player resolves the primary ability of the “Warfare” strategy card, each other player, beginning with the player to the left of the active player and proceeding clockwise, may spend one command token from their strategy pool to resolve the “Production” ability of one space dock in their home system. a The command token is not placed in their home system.
`,
        ]
      }
    ]
  },
  {
    name: 'WORMHOLE NEXUS',
    preamble: 'The wormhole nexus is a system tile where several wormholes converge.',
    subsections: [
      {
        name: '',
        items: [
`
The wormhole nexus begins the game in play with its inactive side up.

1. The inactive side of the wormhole nexus contains a gamma wormhole. The active side of the wormhole nexus contains an alpha, beta, and gamma wormhole.
2. The wormhole nexus is treated as part of the game board.
3. The wormhole nexus is on the edge of the game board.
`,`
After a player moves or places a unit into the wormhole nexus, or gains control of the planet Mallice, that player flips the wormhole nexus to its active side.

1. When a ship moves into the wormhole nexus, the nexus becomes active at the end of the “Movement” step.
`,
        ]
      }
    ]
  },
  {
    name: 'WORMHOLES',
    preamble: 'Some systems contain wormholes. Systems that contain identical wormholes are adjacent.',
    subsections: [
      {
        name: '',
        items: [
`
There are two basic types of wormholes: alpha and beta.
`,`
If a player has a PDS unit upgrade technology, they can use the “Space Cannon” abilities of their PDS units through wormholes.
`,`
Players can be neighbors and perform transactions through wormholes.
`,`
There are two advanced types of wormhole: delta and gamma. These wormholes follow all other wormhole rules.

1. The delta wormholes are present on the Creuss Gate system tile and the Ghosts of Creuss home system tile.
2. The gamma wormholes are present on the wormhole nexus and can be discovered during exploration
`,
        ]
      }
    ]
  },
];

/*
  {
    name: 'Section heading',
    preamble: 'Non-numbered content below the heading',
    subsections: [
      {
        name: 'Numbered secondary heading (if applicable)',
        items: [
`
Markdown content with a number
`,`
Markdown content with a number
`,
        ]
      }
    ]
  },
*/