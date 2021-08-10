import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    e.target.reset();
  };

  return (
    <form
      className="p-4 mx-4 mt-5"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      action="https://rooftop-api-rest-frontend.herokuapp.com/questions"
    >
      <section className="background is-flex  is-justify-content-center mb-4">
        <span className="font mulish has-background-white px-4 is-size-2">
          Leave us your query
        </span>
      </section>
      <div class="field mx-6">
        <label class="label font mulish font-w-3">Email:</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email required",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email.",
              },
            })}
          />

          <p class="help is-danger">{errors?.email?.message}</p>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
      <div class="control mx-6 mt-4">
        <label class="label font mulish font-w-3">Leave us your query:</label>
        <textarea
          class="textarea has-fixed-size"
          name="textarea"
          {...register("textarea", {
            required: {
              value: true,
              message: "Required field",
            },
            maxLength: {
              value: 500,
              message: "Must contain between 10 and 500 characters",
            },
            minLength: {
              value: 10,
              message: "Must contain between 10 and 500 characters",
            },
          })}
        ></textarea>
        <p class="help is-danger">{errors?.textarea?.message}</p>
      </div>
      <div className="is-flex is-justify-content-center mt-4">
        <button name="submit" className="btns font mulish" type="submit">
          Sumbit
        </button>
      </div>
    </form>
  );
};
