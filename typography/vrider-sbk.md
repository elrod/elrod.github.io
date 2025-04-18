**VRider SBK** is a Virtual Reality racing game developed for **Meta Quest 2** and **Meta Quest 3**.  
It puts players in the seat of a superbike rider, racing in the officially licensed **WorldSBK** championship.

Players can choose from **5 official superbikes**, compete on **12 real-world tracks**, and play as one of **23 professional riders** from the actual championship.

#### Key Features

- **Single-player modes:**
  - Quick Races against AI
  - Time Attack
  - Endurance
  - Tournament

- **Synchronous multiplayer** on dedicated servers  
- **Asynchronous multiplayer**

The game was built **mobile-first**, with performance as a priority, fully optimized for standalone devices.  
**No Quest Link required.**

#### Development Challenges

##### Performance Optimization on Standalone Devices

Achieving a stable **72 FPS** on standalone VR devices like Meta Quest was a major challenge, especially for a fast-paced racing game.  
We dedicated a significant amount of time to **profiling** and **performance optimization**, working on:

- Reducing draw calls and overdraw
- Optimizing **materials** and **shaders**
- Baking lighting and occlusion for large scenes
- Aggressive LOD and culling strategies

These optimizations were crucial to delivering a smooth and immersive experience without sacrificing visual quality.

##### Motion Sickness Prevention and Immersive Controls

In a high-speed VR racing game, minimizing **motion sickness** is absolutely critical to ensure a comfortable experience.

We focused heavily on **UX and control design**, iterating through multiple prototypes to reduce disorientation and increase player comfort.  
A key solution was designing a **motorbike control system** that mimics the real-world body movement of professional riders.

By encouraging the player to **lean into turns** and remain physically aligned with the bike's motion, we achieved several goals:

- Enhanced **immersion** and player embodiment
- Reduced sensory mismatch, which helps mitigate motion sickness
- Increased **fun factor**, making the experience more intuitive and engaging

This player-to-vehicle physical synergy proved to be one of the most effective strategies in addressing VR comfort challenges.

##### Scalable Multiplayer Infrastructure

Implementing synchronous multiplayer required building a **dedicated server architecture** capable of scaling efficiently.  
We used **Amazon GameLift** to deploy dedicated servers across multiple AWS regions, ensuring:

- Low latency and geographic coverage for global users
- Scalability to handle spikes in concurrent players
- Cost-efficiency through auto-scaling and flexible fleet management

This setup allowed us to offer competitive online racing with high reliability and minimal maintenance overhead.

##### Cross-Platform Evolution and High-End Adaptation

As the project evolved, we began porting VRider SBK to **high-end platforms** such as **PC VR (SteamVR)** and **PlayStation 5 with PSVR2** support.

This transition required rethinking the visual fidelity of the game to meet the expectations of these platforms.  
We collaborated closely with artists to establish a robust content pipeline, allowing for the **upscaling** of:

- Assets and textures
- Materials and lighting
- Environmental and vehicle shaders

To support this graphical leap, we migrated from **URP (Universal Render Pipeline)** to **HDRP (High Definition Render Pipeline)**.  
Despite the technical upgrade, maintaining **scalability** across devices remained a core requirement.

To address this, we developed in-game **benchmarking tools** and real-time **performance assessment systems**, which:

- Dynamically adapt settings to the user’s hardware capabilities
- Help maintain consistent frame rates and user comfort
- Provide feedback loops for QA and optimization across platforms

This approach ensures that players across all supported devices enjoy a smooth and immersive experience, tailored to the power of their hardware.

#### Lessons Learned & Key Takeaways

##### 1. Designing for Scalable Multiplayer from the Ground Up

One of the most important lessons was learning how to structure a **robust and scalable cloud architecture** to support online multiplayer from the earliest design stages.

Multiplayer gameplay requires thinking beyond the game loop:  
Every component must be built with **network efficiency** and **replication logic** in mind. For instance, the motorbike’s physics system posed critical questions:

- What minimal set of data is needed to accurately sync the bike state across clients?
- Is the physics engine deterministic across platforms?
- How can we minimize bandwidth usage while maintaining fidelity?

These considerations helped us design a netcode-friendly simulation architecture, keeping the multiplayer experience smooth and reliable.

##### 2. Building a Flexible Asset Pipeline for Iteration

Working on a multiplatform title with both VR constraints and high-end target platforms taught us the importance of a **well-structured asset workflow**.

We built a pipeline that allowed **non-developers**—like artists and designers—to:

- Easily import and update assets directly into the scene
- Preview changes quickly in-engine
- Automate build generation and deployment across devices

This dramatically improved iteration times and team autonomy, while ensuring consistent results across different hardware profiles.

##### 3. Deep Understanding of Player Behavior and Iterative UX Design

Throughout development, we learned the value of understanding our **target audience**, not just through intuition but through **data and playtesting**.

We focused on identifying:

- Which features were most accessible or caused friction
- Where players dropped off or lost engagement
- What caused confusion or broke flow

We implemented multiple rounds of **user testing** at different stages, collected gameplay data, and iterated on flows accordingly.  
This helped us refine the **user retention loop** and made the experience more welcoming and intuitive—especially for players new to VR.