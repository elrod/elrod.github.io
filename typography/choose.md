
**C.H.O.O.S.E** (Custom HexagOnal Online Strategic Environment) is an online real-time strategy game developed during the **Online Game Programming** course I attended in 2015.  
It marked my **first experience in building an online multiplayer game**.

Developed for both **Windows** and **Mac OS**, the game supported multiple **peer-to-peer** matches between two players.  
It featured two distinct factions: **Knights** and **Aliens**; and was built around the core concept of **in-game unit customization**.

During a match, players could define and specialize their units on the fly.  
The system dynamically calculated each unit’s **building cost** based on the selected attributes, such as melee strength, dexterity, defense, and movement speed.  
This allowed players to adapt their army compositions in real time according to the **map layout**, **game progression**, or their preferred **strategic playstyle**.

#### Key Features

- **Real-time multiplayer strategy**: Peer-to-peer matches between two players, centered on tactical control of the battlefield and adaptive army building.
- **Fully customizable units**: Players can define unit stats dynamically during the match, adjusting attributes like strength, defense, dexterity, and movement speed to fit their strategy.
- **Asymmetric factions**: Two distinct sides—**Knights** and **Aliens**—each with their own visual identity and gameplay characteristics.
- **Hex-based territory control**: The map is divided into hexagonal regions that players can conquer by occupying them or destroying enemy defenses.
- **Region specialization**: Once captured, each hex tile can be assigned to produce one of the four core resources of the game, depending on the chosen specialization.
- **Resource-driven strategy**: Unit creation and upgrades depend on the type and amount of resources gathered through regional control, encouraging players to optimize expansion and defense.

#### Technology Stack

The project was built in **Unity** and used **Photon Unity Networking (PUN)** to handle multiplayer communication.

Multiplayer matches were structured in a **peer-to-peer architecture** with an **authoritative host**, responsible for managing the match state and synchronizing it across clients.

- Matches could be played in **LAN** or **Online** using **Photon Cloud** services as a relay system to enable communication across the internet.
- **Automatic matchmaking** allowed players to be seamlessly paired with opponents, without needing manual server selection or lobby management.

The networking layer was designed to be robust but lightweight, supporting the real-time nature of the game while maintaining low latency and reliable synchronization of critical game state like unit positions, combat resolution, and region control.

#### Challenges & Lessons Learned

One of the biggest challenges was balancing the gameplay in a system that gave players such a high degree of freedom in defining their strategy. The unit customization and region specialization mechanics opened the door to a wide variety of approaches—some highly focused, such as investing entirely in a single resource type, and others more balanced or defensive.

This made **extensive playtesting** crucial. Several iterations were carried out to identify dominant or degenerate strategies and to ensure that every playstyle had both strengths and vulnerabilities, promoting diversity in matches without sacrificing fairness or fun.

As one of my first experiences building a real-time multiplayer game, the project was also a **valuable learning ground** for many core networking concepts, including:

- **Authoritative architecture** and how to manage trust between clients and host
- **Network load minimization** to keep bandwidth usage efficient
- **State synchronization** across peers for consistency
- **Client-side prediction** to improve responsiveness and reduce the impact of latency

This foundational experience helped me better understand the technical and design complexities of multiplayer systems, from both a development and a player-experience perspective.