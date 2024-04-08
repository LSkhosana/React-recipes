// IngredientsPage.js

import React from 'react';
import './IngredientsPage.css';

const IngredientsPage = () => {
  return (
    <div className="ingredients-page">
      <div className="food-picture">
        <img src="url_to_your_food_image" alt="Food" />
      </div>
      <div className="info-container">
        <div className="ingredients-list">
          <h2>Ingredients</h2>
          <ul>
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
            {/* Add more ingredients as needed */}
          </ul>
        </div>
        <div className="instructions">
          <h2>How to Make</h2>
          <p>Step 1: Instruction 1</p>
          <p>Step 2: Instruction 2</p>
          <p>Step 3: Instruction 3</p>
          {/* Add more instructions as needed */}
        </div>
        <div className="youtube-tutorial">
          <h2>YouTube Tutorial</h2>
          <iframe
            width="560"
            height="315"
            src="url_to_your_youtube_video"
            title="YouTube Tutorial"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default IngredientsPage;

