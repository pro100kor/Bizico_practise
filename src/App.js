import React from "react";
import { Card, Grid, Icon, Image } from "semantic-ui-react";
import "./App.css";
import { getArticles } from "./common/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [{}]
    };
  }

  render() {
    const { isLoaded, articles } = this.state;
    console.log(articles);
    const list = articles.map(article => (
      <Grid>
        <Grid.Column width={4}>
          {!isLoaded ? "Loading" : <Image src={article.cover_image} />}
        </Grid.Column>
        <Grid.Column width={9}>
          <h1>{!isLoaded ? "Loading" : article.title}</h1>
        </Grid.Column>
        <Grid.Column width={3}>
          <span className="iconContainer"><Icon name="like" />
          <span className="likeImage">
            {!isLoaded ? "Loading" : article.positive_reactions_count}
          </span></span>
          <span className="iconContainer"><Icon name="comments" />
          <span className="likeImage">
            {!isLoaded ? "Loading" : article.comments_count}
          </span></span>
        </Grid.Column>
      </Grid>
      // <Grid.Row>
      //   <Grid.Column width={4} />
      //   <Card>
      //     <Card.Content>
      //       <Card.Header>{!isLoaded ? "Loading" : article.title}</Card.Header>
      //       <Card.Meta>
      //         <span className="date">Joined in 2015</span>
      //       </Card.Meta>
      //       <Card.Description>
      //         {!isLoaded ? "Loading" : article.title}
      //       </Card.Description>
      //     </Card.Content>
      //     <Card.Content extra>
      //       <a>22 Friends</a>
      //     </Card.Content>
      //   </Card>
      //   <Grid.Column width={10} />
      //   <Grid.Column width={3} />
      // </Grid.Row>
    ));

    return list;
  }

  componentDidMount() {
    getArticles("https://dev.to/api/articles").then(
      result => {
        this.setState({
          isLoaded: true,
          articles: result.data
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  gridExampleCelledInternally = () => (
    <Grid celled="internally">
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Тут написати треба</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4} />
        <Card>
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>22 Friends</a>
          </Card.Content>
        </Card>
        <Grid.Column width={10} />
        <Grid.Column width={3} />
      </Grid.Row>
    </Grid>
  );
}

export default App;
