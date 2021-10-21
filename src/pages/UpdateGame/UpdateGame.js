import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";

export default function UpdateGame(props) {
  const id = props.match.params.id;

  const [game, setGame] = useState(undefined);

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUrl(id), true);

      const results = await response.json();

      setGame(results);
    };

    loadGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  const firstImage = game.images[0];

  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    // Obtém os dados dos inputs
    const name = event.target.name.value;
    const description = event.target.description.value;
    const imageUrl = event.target.imageUrl.value;

    // Constrói um payload com esses dados
    const payload = {
      name,
      description,
      images: [
        {
          id: firstImage?.id || -1,
          url: imageUrl,
        },
      ],
    };

    // Faz uma requisição no backend
    const response = await Api.buildApiPatchRequest(
      Api.updateUrl(id),
      payload,
      true
    );

    const body = await response.json();

    if (response.status === 200) {
      // Game updated successfully

      const id = body.id;

      props.history.push(`/Game/view/${id}`);
    } else {
      // Error
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label className="form__label" htmlFor="name">
            Name:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="name"
            name="name"
            defaultValue={game.name}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="description">
            Description:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="number"
            id="description"
            name="description"
            defaultValue={game.description}
          />
        </div>

        <div>
          <label className="form__label" htmlFor="imageUrl">
            Image URL:
          </label>
        </div>

        <div>
          <input
            className="form__input-text"
            type="text"
            id="imageUrl"
            name="imageUrl"
            defaultValue={firstImage?.url}
          />
        </div>

        <div>
          <input
            className="form__submit button button--primary"
            type="submit"
            value="Edit"
          />
        </div>
      </form>
    </div>
  );
}
