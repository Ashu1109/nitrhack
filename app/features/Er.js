"use client"
const Er = ({ exercises }) => {
    return (
      <div>
        <h2>Exercises for Mental Health</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercises.map((exercise, index) => (
            <div key={index} className="border p-4 rounded">
              <h3 className="text-lg font-semibold">{exercise.name}</h3>
              <p>{exercise.description}</p>
              <img src={exercise.image} alt={exercise.name} className="mt-2" />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Er;