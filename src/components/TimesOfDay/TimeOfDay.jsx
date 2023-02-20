import React from "react";
import "./TimeOfDay.scss";

function TimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timsOfDay;
  const styles = {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignContent: "center",
    fontSize: 50,
  };

  if (hours < 12) {
    timsOfDay = "утро";
    styles.color = "#7CFC00";
    styles.backgroundColor = "#FFF8DC";
  } else if (hours >= 12 && hours < 17) {
    timsOfDay = "день";
    styles.color = "#FFD700";
    styles.backgroundColor = "#00FFFF";
  } else {
    timsOfDay = "вечер";
    styles.color = "#DA70D6";
    styles.backgroundColor = "#FFF8DC";
  }
  return (
    <div className="times-of-day">
      <h1 className="times-header">Время дня</h1>
      <p className="times-subtitle">{`Сейчас ${date.getHours()} часов ${date.getMinutes()} минут`}</p>
      <h3 style={styles}>Добрый {timsOfDay}!</h3>
    </div>
  );
}

export default TimeOfDay;
