import React from 'react';  // We'll add styles here

const reviews = [
  {
    quote: "Heat-Fit changed everything for me. I used to hate working out, but now I actually look forward to it. The trainers are motivating, the vibe is next-level, and I’m in the best shape of my life.",
    name: "Sarah T.",
    rating: 5,
    goal: null,
    photo: null, // You can add photo URLs here if you want
  },
  {
    quote: "From zero stamina to running 5Ks in 3 months. The group sessions and coaching at Heat-Fit keep me consistent and confident.",
    name: "Mike D.",
    rating: 5,
    goal: "Improved stamina",
    photo: null,
  },
  {
    quote: "Clean gym, killer classes, and a team that actually cares. I’ve tried other gyms — nothing hits like Heat-Fit.",
    name: "Leah M.",
    rating: 5,
    goal: "Gained strength",
    photo: null,
  },
];

const Review = ({ quote, name, rating, goal, photo }) => {
  return (
    <div className="review-card">
      <div className="review-rating">
        {'⭐'.repeat(rating)}
      </div>
      <p className="review-quote">“{quote}”</p>
      <p className="review-name">— {name}</p>
      {goal && <p className="review-goal">{goal}</p>}
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>What Our Members Say</h2>
      <div className="reviews-container">
        {reviews.map((r, idx) => (
          <Review key={idx} {...r} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
