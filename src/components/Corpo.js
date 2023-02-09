import Stories from "./Stories"
import Posts from "./Posts"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="feed">
                <div class="container-esquerdo">
                    <Stories />
                    <Posts />
                    
                </div>
            </div>
        </div>
    )
}