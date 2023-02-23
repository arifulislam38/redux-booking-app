import React from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/img/icons/Frame.svg";
import vector1 from "../../assets/img/icons/Vector (1).svg";
import vector3 from "../../assets/img/icons/Vector (3).svg";
import { bookFlight } from "../../Redux/FlightBook/action";

const BookSection = () => {
  const state = useSelector((state) => state.bookingData);
  const dispatch = useDispatch();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const from = form.from.value;
    const to = form.to.value;
    const date = form.date.value;
    const guests = form.guests.value;
    const ticketClassName = form.ticketClassName.value;

    const bookingData = {
      from,
      to,
      date,
      guests,
      ticketClassName,
    };
    dispatch(bookFlight(bookingData));
    // console.log(bookingData);
  };
  return (
    <div>
      <div className="mt-[160px] mx-4 md:mt-[160px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form onSubmit={handleForm} className="first-hero lws-inputform">
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src={image} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="from"
                  id="lws-from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src={image} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="to"
                  id="lws-to"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                id="lws-date"
                required
              />
            </div>
            {/* 
          <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src={vector1} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="guests"
                  id="lws-guests"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>

            {/* <!-- ClassName --> */}
            <div className="des-from !border-r-0">
              <p>ClassName</p>
              <div className="flex flex-row">
                <img src={vector3} alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
                  name="ticketClassName"
                  id="lws-ticketClassName"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <button
              disabled={state.length > 2}
              className="addCity"
              type="submit"
              id="lws-addCity"
            >
              <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
