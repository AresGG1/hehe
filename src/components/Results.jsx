import { cars } from '../data/cars';

function Results({ answers, onRestart }) {
  const findBestCar = () => {
    // Calculate user's trait scores based on answers
    const userTraits = {};

    Object.values(answers).forEach((answer) => {
      // Each answer has traits with direct values
      Object.entries(answer.traits).forEach(([trait, weight]) => {
        if (!userTraits[trait]) {
          userTraits[trait] = 0;
        }
        userTraits[trait] += weight;
      });
    });

    // Calculate match score for each car
    const carScores = cars.map(car => {
      let matchScore = 0;

      // Compare user traits with car traits
      Object.entries(userTraits).forEach(([trait, userScore]) => {
        const carTrait = car.traits[trait] || 0;
        // Higher match when both are high or both are low
        // Normalize user score to 0-10 scale (approximately)
        const normalizedUserScore = Math.max(0, Math.min(10, (userScore + 20) / 4));
        const difference = Math.abs(normalizedUserScore - carTrait);
        matchScore += (10 - difference) * Math.abs(userScore); // Weight by user preference strength
      });

      return {
        car,
        score: matchScore,
        userTraits
      };
    });

    // Sort by match score and get top 3
    carScores.sort((a, b) => b.score - a.score);

    return {
      topMatch: carScores[0],
      runners: carScores.slice(1, 3),
      userTraits
    };
  };

  const { topMatch, runners } = findBestCar();

  return (
    <div className="results-container">
      <h1>Тупо топ!</h1>

      <div className="winner-card">
        <div className="car-image-container">
          <img
            src={topMatch.car.image}
            alt={topMatch.car.name}
            className="car-image"
          />
        </div>
        <h2 className="car-name">{topMatch.car.name}</h2>
        <p className="car-description">{topMatch.car.description}</p>
      </div>

      {runners.length > 0 && (
        <div className="runners-up">
          <h3>Можна ще</h3>
          <div className="runners-grid">
            {runners.map(({ car }) => (
              <div key={car.id} className="runner-card">
                <div className="runner-image-container">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="runner-image"
                  />
                </div>
                <h4>{car.name}</h4>
                <p className="runner-description">{car.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="restart-button" onClick={onRestart}>
        Ану ще раз
      </button>
    </div>
  );
}

export default Results;
