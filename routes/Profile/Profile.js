
import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Link from '../../components/Link';
import db from '../../components/Database';
import s from './Profile.css';

const title = 'Profile Page';


db.query('SELECT * FROM user', function (err) {
    if (err) throw err

  var dbname={user: username}
   
  });
  db.end()

function Welcome(props) {
    return <h1>Hello, {props.myusername}</h1>;
  }
const myusername = <Welcome name={dbname} />;


class ProfilePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <h1>PROFILE</h1>
        <p>
        <form>
        <label>
          Name: {myusername}
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </p>
        <p>


        </p>
        <h2>Recent Articles</h2>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
      </Layout>
    );
  }

}

export default ProfilePage;
