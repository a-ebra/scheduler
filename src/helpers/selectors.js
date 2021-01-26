export function getAppointmentsForDay(state, day) {
  let apptsForDay = [];
  for (const selectedDay of state.days) {
    if (selectedDay.name === day) {
      for (const appts of selectedDay.appointments) {
        apptsForDay.push(state.appointments[appts]);
      }
    }
  }

  return apptsForDay;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  return {
    ...interview,
    interviewer: state.interviewers[interview.interviewer]
  };
}

export function getInterviewersForDay(state, day) {
  let output = [];
  for (const selectDay of state.days) {
    if (selectDay.name === day) {
      for (const appts of selectDay.interviewers) {
        output.push(state.interviewers[appts]);
      }
    }
  }
  return output;
}