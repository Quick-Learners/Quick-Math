# Software Requirements

## Vision

- Our product vision is to provide individuals of diverse age groups and backgrounds with stimulating challenges that can assist in their learning journeys or the attainment of personal objectives. This initiative not only contributes to enhanced mental well-being. Whether you are a competitive individual, a parent, or someone in pursuit of intellectual challenges, our product is for you.

## Scope

### Feature our products includes

- the ability to write a username
- display previous scores
- different math catagories such as addition, subtraction, multiplication and division
- a 30 second timer

### Feature our products WILL NOT include

- The product will refrain from disclosing which problems user answered incorrect and will solely present the quantity of correct answers achieved.

### MVP

- To attain our Minimum Viable Product (MVP), our objective is to implement a feature that enables the presentation of challenges to users, prompting them to accurately guess numeric values within a designated time frame of 30 seconds. Upon completion of this task, we will provide users with a summary of their performance, showcasing the number of questions they answered correctly.

### Stretch Goals

- We aim to enhance the website by incorporating a real-time clock display instead of retaining this functionality solely within the code. Additionally, we intend to introduce multiple-choice options for users when presenting questions on the screen. This approach not only streamlines the user experience but also introduces a heightened level of challenge, as it requires users to discern the correct response among multiple plausible choices.

## Functional Requirements

- Users have the capability to modify their username.
- Users have the option to choose from various mathematical categories
- Users have the capability to access and review their previous scores.

### Then the four math cataegories will be displayed(addition, subtraction, multiplication, division). Once user picks a catagory a prompt will appear telling user they have 30 seconds to answer as many questions as possible and once they click begin the timer will start and problems will be displayed

## Data Flow

### User Registration

Firstly upon loading up website user will be promtped to enter a username.

### Browsing Challenges

User lands on the websites home screen, where they see a variety of challenges available. The four math cataegories will be displayed they have an oppurtunity to select from are addition, subtraction, multiplication and division.

### Selecting a Challenge

Based on what category the user selects the website fetches problems about the selected challenge from the server.
Problems are displayed to the user.

### Completing the Challenge

User engages with the problems by solving as many mathmatical questions in 30 seconds as possible. As the user progresses, the amount of answers they guess right is being tracked in the backend.

### Post-Challenge Analysis

Upon successful completion of a category the user may earn stars and be added to the leaderboard. Data about previous attempts are stored for user and admin to see.

### Conclusion

Once user decides to part ways with website their personal data will still remain stored on their computer so at a later date they can continue to see their past attemps.
