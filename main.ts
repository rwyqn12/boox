player.onChat("run", function () {
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.move(UP, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 3)
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 3)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.move(UP, 1)
})
