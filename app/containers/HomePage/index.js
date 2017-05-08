import React from 'react';
import {connect}	from	'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import{ Wrapper, Section, headerStyle, subHeaderStyle, Img, ArticleRight, ArticleLeft} from './style.js';
import Header from 'components/Header/index';
import TopLayout from 'components/TopLayout/index';
import Footer from 'components/Footer/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';
import registration from './registration.jpg';
import subjects from './subjects.jpg';
import themes from './themes.jpg';
import task from './task.jpg';
import room from './room.jpg';
import Divider from 'material-ui/Divider';

class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header/>
        </MuiThemeProvider>
        <TopLayout />
        <MuiThemeProvider>
          <Section>
            <Subheader style={headerStyle}> Как это работает?</Subheader>
            <Subheader style={subHeaderStyle}> Теория → Практика → Тестирование</Subheader>
            <div style={{display:'flex'}}>
              <ArticleRight>
              <h1>1. Зарегистрируйся </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleRight>
              <figure>
                <Img src={registration} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', flexDirection: 'row-reverse', margin: 20}}>
              <ArticleLeft>
              <h1>2. Выбери предмет </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleLeft>
              <figure>
                <Img src={subjects} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', margin: 20}}>
              <ArticleRight>
              <h1>3. Выбери тему предмета </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleRight>
              <figure>
                <Img src={themes} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', flexDirection: 'row-reverse', margin: 20}}>
              <ArticleLeft>
              <h1>4. Ознакомься с теоретическим материалом </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleLeft>
              <figure>
                <Img src={registration} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', margin: 20}}>
              <ArticleRight>
              <h1>5. Пройди тестирование </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleRight>
              <figure>
                <Img src={registration} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', flexDirection: 'row-reverse', margin: 20}}>
              <ArticleLeft>
              <h1>6. Выполни работу </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleLeft>
              <figure>
                <Img src={task} />
              </figure>
            </div>
            <Divider style={{margin:10,width:'90%'}}/>
            <div style={{display:'flex', margin: 20}}>
              <ArticleRight>
              <h1>7. Следи за своей успеваемостью </h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
              </ArticleRight>
              <figure>
                <Img src={room} />
              </figure>
            </div>
          </Section>
        </MuiThemeProvider>
        <Footer/>
      </div>
    );
  }
}

const	mapStateToProps	=	(state, ownProps)	=> {
  return {...state};
};

export default connect(mapStateToProps)(HomePage);
