let keyObjectivesVariable = ""

let prompts = {

prompt1:`Problem: IKEA, a global leader in affordable home furnishings, seeks to optimize its digital checkout experience. Despite its innovative approach to retail, the current mobile and desktop checkout processes have fallen short of customer expectations. The company has tasked WongDoody with redesigning these interfaces within a three-week timeframe to enhance user satisfaction and maintain business profitability.\
Key Objectives: ${keyObjectivesVariable}
Please confirm if you understand the brief and let me know if you need more information.`,

prompt2:"Make a basic work-flow for the above brief of a typical user",

prompt3:"Great! I want you to go through the work flow. Understand the brief given by Ikea and give me 3 edge case scenarios for this workflow, that might not be part of typical user interactions and tabulated your results. Use the following information to inform yourself on how to structure the scenarios:\
Scenario Mapping: Design Ideation\
Using Personas\
Kim Flaherty\
March 28, 2021\
Summary: Persona-based scenarios can be leveraged to\
influence design through guided brainstorming workshops\
called scenario-mapping workshops.\
In general, the word ‘scenario’ refers to a sequence of actions or events.\
UX professionals use scenarios in a variety of situations, the two most\
notable ones being usability testing (task scenarios) and ideation of new\
design ideas. In this article, we explore the latter UX use of scenarios.\
Scenarios used for ideation are brief stories about a person using your\
product or service to complete a specific task. They provide your design\
team with useful context and common ground as it attempts to come up\
with design solutions.\
The Anatomy of a Scenario\
Scenarios are usually centered around one task that is key to your\
product and includes 5 elements:\
1. an actor\
2. a motivator\
3. an intention or intent\
4. an action\
5. a resolution\
When writing a scenario, it’s best to use a specific persona as the actor\
carrying out the scenario. Doing so provides additional context and\
insight about how that particular user segment might perform the task.\
For example, below is a possible scenario for a hotel booking website.\
Detailed Debbie is going on a business trip. She needs to book a hotel\
room that’s affordable and has good reviews. Debbie browses the site to\
find a hotel for her upcoming trip. She looks closely at the various hotels\
to find one that meets her needs. She considers price and user ratings\
heavily as she shops. Debbie selects a hotel and books a room.\
Actor Detailed Debbie\
In This Article:\
The Anatomy of a Scenario\
Motivator is going on a business trip.\
Intention \
She needs to book a hotel room that’s affordable and has\
good reviews.\
Action\
Debbie browses the site to find a hotel for her upcoming\
trip. She looks closely at the various hotels to find one that\
meets her needs.\
Resolution Debbie selects a hotel and books a room.\
Getting the Right Level of Granularity\
Scenarios are meant as an ideation tool for design. Like storytelling,\
they provide life to a potentially abstract idea (the main task), making it\
easier to empathize with users and provide insightful solutions.\
Because in essence, they are short narratives, they are more memorable\
than just a user task and a set of requirements. But there is a danger to\
taking the scenario too far and adding in too many details: it can lead to\
solutions that are too tailored to the scenario while ignoring the range\
of possible real-life situations.\
Here are some guidelines to ensure the right level of granularity and\
detail:\
1. Keep scenarios high-level and avoid design specifics. Scenarios\
should inspire design ideas. Avoid injecting solutions too early,\
since these could inhibit or bias ideation. For example, avoid\
specifics like the following:\
DON’T: Debbie goes to the Book a Hotel tab and uses the search\
bar to look for a hotel. She uses the left-side filter menu to filter the\
results. She considers price and user ratings heavily as she shops and\
adds those she likes best to her Favorites list. She revisits her\
Favorites list in her user profile.\
2. Include only a few general references to the personas’ needs and\
priorities. It’s okay to include a few high-priority, general user\
needs in the scenario, to ensure that they are taken into account\
during ideation. Our scenario, mentions Debbie’s interest in\
affordability, reviews, price, and ratings. However, be careful to\
avoid too many specifics and superfluous details. Doing so can\
make design ideation too specific in these early stages. Focus on\
the most important factors that would impact the user’s actions\
instead of creating a laundry list of every potential detail the\
persona might consider. The following example is too specific:\
DON’T: Detailed Debbie is going on a business trip to Honolulu\
Hawaii, and she is traveling with her small dog, Penny. She needs\
to book a hotel room that’s affordable, has good reviews, and a\
minibar. It must also be on the 2nd floor near the elevator. Debbie\
browses the site to find a hotel. She looks closely at the various hotels\
to find one that meets her needs, spending 45 minutes looking at\
hotel photos trying to determine if the bed will be comfortable and if\
there is enough closet room for her clothes. As she shops, she\
considers price, user ratings, WIFI speed, and the availability of\
snacks provided free upon her arrival. Debbie selects a hotel and\
books a room using her American Express card. She hopes that taxi\
cabs are easy to reserve because she will have an early morning\
departure flight.",

prompt4:"Give me 3 examples of situations where the user's action might lead to a dead-end or an unhandled scenario within an app. Follow the same scenario mapping template and tabulate your results",

prompt5:"Might there be any complex or intricate user requests that might pose challenges in the app? Map and tabulate the scenario for that as well",

prompt6:"Can you describe an unusual user behavior in this app that the system might find challenging to process? Map the scenarios and tabulate your results",

prompt7:"Great scenario mapping! What i want you to do next is revise the work flow made earlier in order to accommodate the scenarios. Also refer our entire conversation to inform your decision. Make the revised workflow as mermaid code"

};

const context = {
    referenceDocument:
    "Scenario Mapping: Design Ideation\
Using Personas\
Kim Flaherty\
March 28, 2021\
Summary: Persona-based scenarios can be leveraged to\
influence design through guided brainstorming workshops\
called scenario-mapping workshops.\
In general, the word ‘scenario’ refers to a sequence of actions or events.\
UX professionals use scenarios in a variety of situations, the two most\
notable ones being usability testing (task scenarios) and ideation of new\
design ideas. In this article, we explore the latter UX use of scenarios.\
Scenarios used for ideation are brief stories about a person using your\
product or service to complete a specific task. They provide your design\
team with useful context and common ground as it attempts to come up\
with design solutions.\
The Anatomy of a Scenario\
Scenarios are usually centered around one task that is key to your\
product and includes 5 elements:\
1. an actor\
2. a motivator\
3. an intention or intent\
4. an action\
5. a resolution\
When writing a scenario, it’s best to use a specific persona as the actor\
carrying out the scenario. Doing so provides additional context and\
insight about how that particular user segment might perform the task.\
For example, below is a possible scenario for a hotel booking website.\
Detailed Debbie is going on a business trip. She needs to book a hotel\
room that’s affordable and has good reviews. Debbie browses the site to\
find a hotel for her upcoming trip. She looks closely at the various hotels\
to find one that meets her needs. She considers price and user ratings\
heavily as she shops. Debbie selects a hotel and books a room.\
Actor Detailed Debbie\
In This Article:\
The Anatomy of a Scenario\
Motivator is going on a business trip.\
Intention \
She needs to book a hotel room that’s affordable and has\
good reviews.\
Action\
Debbie browses the site to find a hotel for her upcoming\
trip. She looks closely at the various hotels to find one that\
meets her needs.\
Resolution Debbie selects a hotel and books a room.\
Getting the Right Level of Granularity\
Scenarios are meant as an ideation tool for design. Like storytelling,\
they provide life to a potentially abstract idea (the main task), making it\
easier to empathize with users and provide insightful solutions.\
Because in essence, they are short narratives, they are more memorable\
than just a user task and a set of requirements. But there is a danger to\
taking the scenario too far and adding in too many details: it can lead to\
solutions that are too tailored to the scenario while ignoring the range\
of possible real-life situations.\
Here are some guidelines to ensure the right level of granularity and\
detail:\
1. Keep scenarios high-level and avoid design specifics. Scenarios\
should inspire design ideas. Avoid injecting solutions too early,\
since these could inhibit or bias ideation. For example, avoid\
specifics like the following:\
DON’T: Debbie goes to the Book a Hotel tab and uses the search\
bar to look for a hotel. She uses the left-side filter menu to filter the\
results. She considers price and user ratings heavily as she shops and\
adds those she likes best to her Favorites list. She revisits her\
Favorites list in her user profile.\
2. Include only a few general references to the personas’ needs and\
priorities. It’s okay to include a few high-priority, general user\
needs in the scenario, to ensure that they are taken into account\
during ideation. Our scenario, mentions Debbie’s interest in\
affordability, reviews, price, and ratings. However, be careful to\
avoid too many specifics and superfluous details. Doing so can\
make design ideation too specific in these early stages. Focus on\
the most important factors that would impact the user’s actions\
instead of creating a laundry list of every potential detail the\
persona might consider. The following example is too specific:\
DON’T: Detailed Debbie is going on a business trip to Honolulu\
Hawaii, and she is traveling with her small dog, Penny. She needs\
to book a hotel room that’s affordable, has good reviews, and a\
minibar. It must also be on the 2nd floor near the elevator. Debbie\
browses the site to find a hotel. She looks closely at the various hotels\
to find one that meets her needs, spending 45 minutes looking at\
hotel photos trying to determine if the bed will be comfortable and if\
there is enough closet room for her clothes. As she shops, she\
considers price, user ratings, WIFI speed, and the availability of\
snacks provided free upon her arrival. Debbie selects a hotel and\
books a room using her American Express card. She hopes that taxi\
cabs are easy to reserve because she will have an early morning\
departure flight."
}

// // const prompts = {
// //     prompt1: "Hello",
// //     prompt2: "Call me jairaj",
// //     prompt3: "I am a student",
// //     prompt4: "I am studying in 12th standard",
// //     prompt5: "Can you suggest me some good books for my studies",
// //     prompt6: "I am interested in science and engineering",
// //     prompt7: "I want to become a software engineer",
// //     prompt8: "What standard am i studying in?",
// //     prompt9: "What is my name?",
// //     // Add more prompts as needed
// // };

module.exports = { prompts, keyObjectivesVariable };