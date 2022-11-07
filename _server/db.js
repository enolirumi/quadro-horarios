import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('quadro_horarios', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

export default sequelize