import React from "react";
import styled from "styled-components";
import { IoMdContact } from "react-icons/io";
import { AiOutlineNumber } from "react-icons/ai";
import { FaTemperatureLow } from "react-icons/fa";
import { RiCelsiusLine } from "react-icons/ri";

const Symptoms = () => {
  return (
    <SymptomContainer>
      <div className="container my-4">
        <h2 className="mt-4 text-center display-5">
          <span
            className="badge badge-light badge-pill"
            style={{ fontSize: "180%" }}
          >
            CoVID-19 Symptom Checker
          </span>
        </h2>
      </div>

      <div className="container">
        <form method="POST" className="form mt-4">
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <IoMdContact size="20px" />
              </span>
            </div>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name..."
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <div className="input-group my-5">
            <div className="input-group-prepend ">
              <span className="input-group-text" id="basic-addon1">
                <AiOutlineNumber size="20px" />
              </span>
            </div>
            <input
              className="form-control"
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age..."
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <div className="input-group my-5">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <FaTemperatureLow size="20px" />
              </span>
            </div>
            <input
              className="form-control"
              type="number"
              id="temperature"
              name="temperature"
              placeholder="Your Body Temperature..."
              aria-describedby="basic-addon1"
              required
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <RiCelsiusLine size="20px" />
              </span>
            </div>
          </div>

          <div className="my-5">
            <div className="row">
              <div className="col-4">Do you have Cough?</div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="cough"
                    id="cough1"
                    value="1"
                  />
                  <label className="custom-control-label" for="cough1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="cough"
                    id="cough2"
                    value="0"
                  />
                  <label className="custom-control-label" for="cough2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className=" my-5">
            <div className="row">
              <div className="col-4">Do you have Headache?</div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="headache"
                    id="headache1"
                    value="1"
                  />
                  <label className="custom-control-label" for="headache1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="headache"
                    id="headache2"
                    value="0"
                  />
                  <label className="custom-control-label" for="headache2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="row">
              <div className="col-4">Do you have Bodypains?</div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="bodypain"
                    id="bodypain1"
                    value="1"
                  />
                  <label className="custom-control-label" for="bodypain1">
                    Yes
                  </label>
                </div>
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="bodypain"
                    id="bodypain2"
                    value="0"
                  />
                  <label className="custom-control-label" for="bodypain2">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="my-5">
            <div className="row">
              <div className="col-4">
                How severe is your shortness of Breath?
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="breath"
                    id="breath1"
                    value="1"
                  />
                  <label className="custom-control-label" for="breath1">
                    None
                  </label>
                </div>
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="breath"
                    id="breath2"
                    value="2"
                  />
                  <label className="custom-control-label" for="breath2">
                    Mild
                  </label>
                </div>
              </div>
              <div className="col-1 col-sm-2">
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    className="custom-control-input"
                    type="radio"
                    name="breath"
                    id="breath3"
                    value="3"
                  />
                  <label className="custom-control-label" for="breath3">
                    Unbreathable
                  </label>
                </div>
              </div>
            </div>
          </div>

          <button className="btn btn-outline-primary my-4 btn-lg btn-block">
            Submit
          </button>
        </form>
      </div>
    </SymptomContainer>
  );
};

export default Symptoms;

// STYLED COMPONENTS
const SymptomContainer = styled.div`
  color: white;
  input {
    background-color: var(--dark);
  }
  .input-group-text {
    background-color: var(--neon-blue);
  }
  .badge {
    background-color: var(--neon-blue);
  }
`;
