import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "#0E5E6F" }}>
                        {product.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: "bold", color: "#E14D2A" }
                }}
            />

            <CardMedia
                sx={{ height: 140, backgroundSize: "contain", bgcolor: "#FFF9B0" }}
                component="img"
                height="140"
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    ${(product.price).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ color: "#E14D2A" }}>Share</Button>
                <Button size="small" sx={{ color: "#E14D2A" }}>View</Button>
            </CardActions>
        </Card >
    )
}


