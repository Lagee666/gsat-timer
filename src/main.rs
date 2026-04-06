use std::net::SocketAddr;

use axum::Router;
use tracing::{Level, debug, level_filters::LevelFilter};
use tracing_subscriber::{fmt, layer::SubscriberExt};
#[tokio::main]
async fn main() {
    let subscriber = tracing_subscriber::registry()
        .with(LevelFilter::from_level(Level::DEBUG))
        .with(fmt::layer());

    tracing::subscriber::set_global_default(subscriber).expect("failed to set subscriber");
    let gsat_timer_app = Router::new().fallback_service(
        tower_http::services::ServeDir::new("dist")
            .not_found_service(tower_http::services::ServeFile::new("dist/index.html")),
    );
    let addr = SocketAddr::from(([127, 0, 0, 1], 5000));
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    debug!("🚀 伺服器啟動：http://localhost:5000");
    axum::serve(listener, gsat_timer_app).await.unwrap();
}
