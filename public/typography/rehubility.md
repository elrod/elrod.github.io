**Re-Hub-ILITY** is a research project I contributed to, building on my previous work in the field of **serious games for health**.  
The goal of the project is to create a sustainable, safe, and effective platform for **autonomous at-home postural rehabilitation** for the elderly.

#### Key Features

- A user-friendly platform that enables safe and effective rehabilitation sessions at home
- Real-time monitoring of the user's movements to ensure safety during exercises
- A virtual coaching system that guides and advises users through their daily routines
- Seamless integration with a dedicated monitoring platform for clinicians and caregivers to track user progress remotely

#### Technology Stack & Architecture

The core of the **Re-Hub-ILITY** system is a Unity-based client structured as a set of themed mini-games designed for rehabilitation.

The client interfaces with a **Node.js backend** that exposes:

- **OAuth-based authentication APIs**
- **Client-side APIs** for uploading gameplay results and download the daily exercise schedule.
- **Server-to-server APIs** for communication with external partners responsible for clinical data aggregation

##### Hardware Abstraction for Motion Tracking

A major technical focus was building an **input abstraction layer** on top of Unity’s Input System.  
This allowed seamless integration with various motion tracking devices, including:

- Commercial sensors like **Microsoft Azure Kinect**
- Custom-made wearable devices developed by partner institutions
  - Including **MEMS-based sensors** for joint rotation tracking
  - And **active feedback devices** capable of applying physical resistance during strength exercises

This abstraction ensured maximum **hardware flexibility**, allowing clinical partners to tailor the rehabilitation experience to the needs of each study or patient group without changes to the game logic.

### Real-Time Monitoring & Virtual Coaching

To enhance both the **effectiveness** and **engagement** of the rehabilitation experience, we developed a real-time **exercise monitoring system** built around the figure of a **virtual therapist**.

This system served two core functions:

1. **Posture Feedback During Exercise**  
   It provided instant visual and audio feedback on the quality of the user's posture and movements.  
   This helped ensure **safe execution** of the exercises and enabled users to **self-correct** in real time, reducing the risk of injury or incorrect performance.

2. **Motivation and Personalized Guidance**  
   Through the virtual therapist character, the system offered:
   - Positive reinforcement and motivational messages during and after sessions
   - General health and movement advice tailored to the user’s performance
   - Support on long-term training goals to improve consistency and adherence

This approach helped **increase user retention**, especially in elderly users, by making the experience more personal, supportive, and easy to follow.

#### Lessons Learned

##### Making Technology Accessible Through Thoughtful UX

One of the most valuable lessons from the Re-Hub-ILITY project was the importance of **iterative user experience design**, especially when targeting populations that may not be familiar with digital technology—such as the elderly.

We learned that:

- **Accessibility** must be a primary design goal, not an afterthought  
- Visual feedback, interaction clarity, and onboarding simplicity are essential to reduce cognitive load
- Even small friction points can become **barriers to engagement** and retention

Frequent **user testing cycles** with real participants were key to refining flows, simplifying interactions, and ensuring the virtual therapist’s guidance was intuitive and supportive.

Designing with empathy and adaptability was fundamental to making the platform **truly usable and beneficial** in a real-world health context.