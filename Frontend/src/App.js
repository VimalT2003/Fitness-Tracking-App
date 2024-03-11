// import WorkoutLogForm from './component/WorkoutLogForm';
// import GoalSettingform from './component/GoalSettingform';
import {Route,Routes} from 'react-router-dom';

import Loginform from './component/Userpages/Loginform';
import Signupform from './component/Userpages/Signupform';
import Home from './component/Mainpages/Home';
import UserHome from './component/Userpages/UserHome';
import Exercisesadd from './component/Adminpages/Exerciseadd';
import AdminHome from './component/Adminpages/AdminHome';
import Exercisedetailstable from './component/Adminpages/Exercisedetailstable';
import Exercises from './component/Userpages/Exercises';
import ExercisesView from './component/Userpages/ExercisesView';
// import Challengesadd from './component/Adminpages/ChallengesAdd';
import Feedbackform from './component/Userpages/Feedbackform';
import Feedbacktable from './component/Adminpages/Feedbacktable';

import Userlist from './component/Adminpages/Userlist';
import GoalSettingform from './component/Userpages/GoalSettingform';
import WorkoutLogForm from './component/Userpages/WorkoutLogForm';
import GoalHistory from './component/Userpages/GoalHistory';
import WorkoutHistory from './component/Userpages/WorkoutHistory'
import BMI2 from './component/Userpages/BMI2';
import { ContactUs } from './component/Mainpages/ContactUs';
import Profile from './component/Userpages/Profile';
import UpdateGoal from './component/Userpages/UpdateGoal';
import UpdateWorkout from './component/Userpages/UpdateWorkout';
import Updateexercise from './component/Adminpages/Updateexercise';





function App() {
  return (
    <div>
       <div className="w-100">
       
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userhome" element={<UserHome/>} />
          <Route path="loginform" element={<Loginform/>} />
          <Route path="signupform" element={<Signupform/>} />
          {/* <Route path="workoutlog" element={<WorkoutlogMenu/>} /> */}
          <Route path="exerciseadd" element={<Exercisesadd/>} />
          <Route path="adminhome" element={<AdminHome/>} />
          <Route path="userhome" element={<UserHome/>} />
          <Route path="exercisetable" element={<Exercisedetailstable/>} />
          <Route path="exercises" element={<Exercises/>} />
          <Route path="/:id" element={<ExercisesView/>} />
          {/* <Route path="challengesadd" element={<Challengesadd/>} /> */}
          <Route path="feedbackform" element={<Feedbackform/>} />
          <Route path="feedback" element={<Feedbacktable/>} />
          <Route path="userdetails" element={<userDetails/>} />
          <Route path="userlist" element={<Userlist/>} />
          <Route path="goallog" element={<GoalSettingform/>} />
          <Route path="workoutlog" element={<WorkoutLogForm/>} />
          <Route path="goalhistory" element={<GoalHistory/>} />
          <Route path="workouthistory" element={<WorkoutHistory/>}/>
          <Route path="bmi2" element={<BMI2/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="updategoal/:id" element={<UpdateGoal/>}/>
          <Route path="updateworkout/:id" element={<UpdateWorkout/>}/>
          <Route path="updateexercise/:id" element={<Updateexercise/>}/>
          
         </Routes>
       </div>
    </div>
  );
}

export default App;
