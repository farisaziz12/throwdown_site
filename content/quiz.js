const quiz = [
  {
    question: "Can at least 3 athletes in your team do Double Unders?",
    answers: [
      {
        txt: "Yes.",
        value: {
          category: "ludicrous",
          points: 2,
        },
      },
      {
        txt: "Well... only 1-2 of us can.",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "Nope.",
        value: {
          category: "fun",
          points: 2,
        },
      },
    ],
  },
  {
    question:
      "How many unbroken double unders can the most proficient athlete in your team do?",
    answers: [
      {
        txt: "50+",
        value: {
          category: "ludicrous",
          points: 2,
        },
      },
      {
        txt: "20-50",
        value: {
          category: "ludicrous",
          points: 1,
        },
      },
      {
        txt: "10-20",
        value: {
          category: "spicy",
          points: 3,
        },
      },
      {
        txt: "1-5",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "I can't do Double Unders. Only Single Unders for me.",
        value: {
          category: "fun",
          points: 2,
        },
      },
    ],
  },
  {
    question: "How many in your team can do at least 1 Muscle up consistently?",
    answers: [
      {
        txt: "4",
        value: {
          category: "ludicrous",
          points: 3,
        },
      },
      {
        txt: "3",
        value: {
          category: "ludicrous",
          points: 2,
        },
      },
      {
        txt: "2",
        value: {
          category: "ludicrous",
          points: 1,
        },
      },
      {
        txt: "1",
        value: {
          category: "spicy",
          points: 2,
        },
      },
      {
        txt:
          "0 but we have a mix of being able to do Chest-to-bar and Pull ups.",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "We can mostly do Pull ups.",
        value: {
          category: "fun",
          points: 2,
        },
      },
    ],
  },
  {
    question:
      "Assuming at least 2 athletes in your team are capable. How many unbroken HSPU can they do?",
    answers: [
      {
        txt: "3-5.",
        value: {
          category: "ludicrous",
          points: 2,
        },
      },
      {
        txt: "Singles.",
        value: {
          category: "spicy",
          points: 2,
        },
      },
      {
        txt: "A couple but need 1-2 abmats.",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "Nobody on my team likes being upside down (No HSPU).",
        value: {
          category: "fun",
          points: 2,
        },
      },
    ],
  },
  {
    question: "Select the one that applies to your team.",
    answers: [
      {
        txt:
          "3 if not all of us have participated in a team competition before (e.g. Swiss Team Challenge).",
        value: {
          category: "ludicrous",
          points: 1,
        },
      },
      {
        txt: "1-2 of us have done something like that before.",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "Never really tried but we are quite a capable team.",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "Not really, we want to test the waters.",
        value: {
          category: "fun",
          points: 1,
        },
      },
    ],
  },
  {
    question: "Select the one that applies to at least 2 in your team.",
    answers: [
      {
        txt: "M:60/F:45 KG Snatch and M:75/F:50 KG Clean & Jerk",
        value: {
          category: "ludicrous",
          points: 2,
        },
      },
      {
        txt: "M:45/F:30 KG Snatch and M:60/F:40 KG Clean & Jerk",
        value: {
          category: "spicy",
          points: 2,
        },
      },
      {
        txt:
          "Within 2-4KG of M:45/F:30 KG Snatch and M:60/F:40 KG Clean & Jerk",
        value: {
          category: "spicy",
          points: 1,
        },
      },
      {
        txt: "M:30/F:20 KG Snatch and M:40/F:25 KG Clean & Jerk",
        value: {
          category: "fun",
          points: 2,
        },
      },
    ],
  },
];

module.exports = {
  quiz,
};
