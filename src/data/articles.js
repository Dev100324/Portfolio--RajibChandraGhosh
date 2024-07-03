import React from "react";

function article_3() {
	return {
		date: "19 Feb 2024",
		title: "Multivariate Time Series Forecasting to Forecast Weight Dynamics",
		description:
			"I'm happy to share that, recently one of our works have been published by IEEE Xplore.",
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.randImage {
			align-self: center;
			outline: 2px solid red;
		}
		`,
		keywords: [
			"Artificial Intelligence",
			"Time Series",
			"Rajib Chandra Ghosh",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Excited to share the news of my recent paper,
						"Multivariate Time Series Forecasting to Forecast Weight
						Dynamics," now published in 2023 International
						Conference on Computational Intelligence, Networks and
						Security (ICCINS){" "}
						<a
							href="https://ieeexplore.ieee.org/document/10434951"
							target="_blank"
							rel="noreferrer"
						>
							IEEE
						</a>
						. Delving into insect colony dynamics, we explore the
						prediction of colony weight—a key factor influencing
						insect growth and health.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_1() {
	return {
		date: "2 July 2024",
		title: "A Study on Different Parameters Affecting Overall Cost of Global Content Distribution Services in Metropolitan Cloud Network (Under Conference Proceedings) ",
		description: `I'm happy to share that, another paper of mine has been published by the renowned and blind peer-reviewed journal where each paper has been reviewed by three experts named "24th International Conference on Computational Science and Its Applications (ICCSA-2024)`,
		keywords: ["The Benefits of Cloud Computing", "Rajib Chandra Ghosh"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						I'm happy to share that, another paper of mine has been
						published by the renowned and blind peer-reviewed journal
						where each paper has been reviewed by three experts
						named "24th International Conference on Computational
						Science and Its Applications (ICCSA-2024)". The paper is
						titled "A Study on Different Parameters Affecting
						Overall Cost of Global Content Distribution Services in
						Metropolitan Cloud Network". This is about utilizing an
						optimization algorithm to optimize the cloud network's
						delivery cost traffic (data) in the cloud network and
						analyzing different parameters that have a significant
						impact on the overall cost of the network. The paper has been 
						published in Lecture Notes in Computer
						Science (LNCS){" "}
						<a
							href="https://link.springer.com/chapter/10.1007/978-3-031-64605-8_4"
							target="_blank"
							rel="noreferrer"
						>
							Springer
						</a>
						having a decent H-Index and Impact Factor.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "22 Nov 2023",
		title: "An Anti-Churn Model for Real-Time Business (Under Conference Proceedings)",
		description: `I'm happy to share that, another paper of mine has been accepted and is now Under Conference Proceedings`,
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.randImage {
			align-self: center;
			outline: 2px solid red;
		}
		`,
		keywords: ["Artificial Intelligence", "Rajib Chandra Ghosh"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Excited to share the news of my recent paper, "An
						Anti-Churn Model for Real-Time Business," is Under
						Conference Proceedings in International Conference on
						Data Engineering and Machine Intelligence(2023-ICDEMI){" "}
						<a
							href="https://easychair.org/cfp/icdemi2023?spy=626122"
							target="_blank"
							rel="noreferrer"
						>
							Springer
						</a>
						.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "4 May 2021",
		title: "Prediction Of Medicine Consumption Using Machine Learning",
		description:
			"I'm happy to share that, recently one of our works have been published by International Journal of Emerging Technologies and Innovative Research.",
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.randImage {
			align-self: center;
			outline: 2px solid red;
		}
		`,
		keywords: ["Artificial Intelligence", "Rajib Chandra Ghosh"],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						Excited to share the news of my paper, "Prediction Of
						Medicine Consumption Using Machine Learning," published
						in International Journal of Emerging Technologies and
						Innovative Research{" "}
						<a
							href="https://www.jetir.org/view?paper=JETIR2105391"
							target="_blank"
							rel="noreferrer"
						>
							(JETIR)
						</a>
						.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
