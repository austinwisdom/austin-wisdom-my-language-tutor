/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('conversations_en').del();
  await knex('conversations_en').insert([
    {
      id: 0,
      title: 'Ordering at a café',
      description: "Practice ordering something to drink and eat at a café.",
      language: "en",
      prompt: {
          model: "text-davinci-003",
          prompt: `Pretend you're a barista at a coffee shop, you're helping Me to complete their order. Here are your objectives for the conversation:\n1. Find out what they want to drink, and what size they want.\n2. Find out what they want to eat.\n3. Ask if there's anything else you can get for them today.\n4. Tell them the total price for their order (like $5.87 for example).\n5. Thank them for their order, tell them to have a great day.\n\nAfter these objectives have been completed, the conversation is marked as concluded.\n\nBegin conversation below:\nBarista: Hi there, what can I get started for you today?\n\nMe:`,
          temperature: 1,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ["Me"],
        },
      starting_phrase: "Barista: What can I get started for you today?",
    },
  ]);
};