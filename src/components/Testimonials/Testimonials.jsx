import { Card } from '../ui/card.jsx';

export const Testimonials = () => {
    return (
        <div className="flex">
            <div className="w-1/3">
                <Card>
                    <h1>What our clients say about us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </Card>
            </div>
            <div className="w-2/3">
                <p>The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.</p>
                <div>
                    <div>
                        <h1>Jenny Wilson</h1>
                        
                        <span>Vice President</span>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
