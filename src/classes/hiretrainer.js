import React from 'react';
import './classDetails.css';
import trainerimg from '../assets/images/male.png';
import { getAllTrainers } from '../api/trainer';
import { enrollOrQuitTrainer } from '../api/user';

const HireTrainer = () => {
  const { user } = useAuth();
  const [trainers, setTrainers] = useState([]);
  let isAuthenticated, plan, enrolledClassId;
  if (user) {
    ({ isAuthenticated, plan } = user);
  }

  const handleEnroll = async (trainerId) => {
    if (isAuthenticated && plan === 'premium') {
      enrolledClassId = await enrollOrQuitTrainer({
        userId: user.id,
        trainerId: trainerId,
      });
    }
  };
  useEffect(async () => {
    const trainerList = await getAllTrainers();
    setTrainers(trainerList);
  }, [trainers]);

  return (
    <div class='class__main-div'>
      <p class='class-p1'>Our Trainers</p>
      <p class='class-p2'>Available Gym Trainers</p>
      <p class='class-p3'>
        Meet our experienced gym trainers dedicated to helping you achieve your
        fitness goals.
      </p>
      <div class='class_card-div'>
        {trainers.map((trainer) => (
          <div class='class_item-div' key={trainer.userId}>
            <img src={trainerimg} alt='alt text' />
            <p class='class-p4'>Yoga Trainer</p>
            <p class='class-p5'>
              Our gym trainers are highly experienced and committed to providing
              personalized guidance, helping you reach your fitness goals
              effectively and safely.
            </p>
            <button onClick={() => handleEnroll(trainer.userId)}>
              Hire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HireTrainer;
