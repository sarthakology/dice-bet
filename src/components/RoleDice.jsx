import styled from "styled-components";
import dice1 from "../assets/images/dice/dice_1.png";
import dice2 from "../assets/images/dice/dice_2.png";
import dice3 from "../assets/images/dice/dice_3.png";
import dice4 from "../assets/images/dice/dice_4.png";
import dice5 from "../assets/images/dice/dice_5.png";
import dice6 from "../assets/images/dice/dice_6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={diceImages[currentDice - 1]} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
