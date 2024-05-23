import Model1 from "../Models/F1/model1";
import Model2 from "../Models/F2/Model2";
import Model3 from "../Models/F3/mainpage";


export const RenderPage = ({ model, data }) => {
    switch (model) {
      case 'model1':
        return Model1
      case 'model2':
        return Model2 ;
      case 'model3':
        return Model3;
      default:
        return null;
    }
  };
  
  // {eventNames.map((eventName, index) => (
  //   <div key={index}>
  //   <label htmlFor={`eventname${index}`} className="font-bold border-1">
  //     Event Name
  //   </label>
  //   <input
  //     type="text"
  //     name="eventname"
  //     id={`eventname${index}`}
  //     placeholder={eventNames[index] || "Event Name"}
  //     onChange={handleChange}
  //     className="input border-2 py-1 px-3 w-full"
  //   />
  //   <label htmlFor={`eventdate${index}`} className="font-bold border-1">
  //     Event Date
  //   </label>
  //   <input
  //     type="date"
  //     name="eventdate"
  //     id={`eventdate${index}`}
  //     onChange={handleChange}
  //     className="input border-2 py-1 px-3 w-full"
  //   />
  //   <label htmlFor={`eventdescription${index}`} className="font-bold border-1">
  //     Event Description
  //   </label>
  //   <input
  //     type="text"
  //     name="eventdescription"
  //     id={`eventdescription${index}`}
  //     placeholder="Event Description"
  //     onChange={handleChange}
  //     className="input border-2 py-1 px-3 w-full"
  //   />
  // </div>
  // ))}