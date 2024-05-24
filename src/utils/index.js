import axios from "axios";

export const moviesApi = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	params: {
		api_key: process.env.REACT_APP_TBDB_KEY
	}
})

export const fetchToken = async () => {
	try {
		const response = await moviesApi.get("/authentication/token/new");

		const token = response.data.request_token;

		if (response.data.success) {
			localStorage.setItem("request_token", token);

			window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`
		}
	} catch (e) {
		console.log("Token could not be created")
	}
}

export const createSessionId = async () => {
	const token = localStorage.getItem("request_token");

	if (token) {
		try {
			const { data: { session_id } } = await moviesApi.post("authentication/session/new", {
				request_token: token,
			})

			localStorage.setItem("session_id", session_id);

			return session_id;
		} catch (e) {
			console.log("Error: ", e);
		}
	}
}