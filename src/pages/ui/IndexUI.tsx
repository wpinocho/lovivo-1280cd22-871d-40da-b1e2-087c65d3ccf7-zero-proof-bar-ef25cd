import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * EDITABLE UI - IndexUI
 * 
 * Y2K Zero-Proof Bar Homepage with cyber aesthetic
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section - Y2K Mocktails */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/src/assets/hero-mocktails.jpg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 y2k-gradient opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-block mb-4">
            <span className="y2k-gradient text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-primary/50 bg-background/80 backdrop-blur-sm">
              Zero-Proof Bar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="y2k-gradient-text y2k-text-glow">
              Y2K Mocktails
            </span>
            <br />
            <span className="text-secondary">
              For the Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/90 mb-8 max-w-3xl mx-auto font-medium">
            Non-alcoholic spirits with holographic flavor. Zero hangover, infinite vibes. Welcome to the new millennium.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="y2k-gradient hover:opacity-90 transition-opacity text-background font-bold text-lg px-8 py-6 y2k-glow group"
              onClick={() => {
                const section = document.getElementById('spirits');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover Flavors
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-primary font-bold text-lg px-8 py-6"
              onClick={() => {
                const section = document.getElementById('collections');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="y2k-gradient-text">
                  Curated Collections
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pre-selected bundles for every vibe. Start mixing Y2K classics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {collections.map((collection) => (
                <div 
                  key={collection.id}
                  className="group cursor-pointer"
                  onClick={() => handleViewCollectionProducts(collection.id)}
                >
                  <div className="y2k-card rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      {collection.image ? (
                        <>
                          <img 
                            src={collection.image} 
                            alt={collection.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-muted">
                          <span className="text-muted-foreground text-sm">No image</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {collection.name}
                      </h3>
                      
                      {collection.description && (
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                      
                      <Button 
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary hover:text-background font-semibold"
                      >
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NA Spirits Grid */}
      <section id="spirits" className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-3">
                {selectedCollectionId 
                  ? <span className="y2k-gradient-text">{collections.find(c => c.id === selectedCollectionId)?.name}</span>
                  : <span className="y2k-gradient-text">Zero-Proof Spirits</span>
                }
              </h2>
              <p className="text-lg text-muted-foreground">
                {selectedCollectionId 
                  ? 'Curated selection for maximum flavor'
                  : 'Our complete range of non-alcoholic alternatives'
                }
              </p>
            </div>
            
            {selectedCollectionId && (
              <Button 
                variant="outline"
                onClick={handleShowAllProducts}
                className="border-primary/50 hover:bg-primary hover:text-background font-semibold"
              >
                View All Spirits
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="y2k-card rounded-xl h-96 animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="y2k-card max-w-md mx-auto p-8 rounded-2xl">
                <p className="text-muted-foreground text-lg mb-4">
                  No spirits found in this collection.
                </p>
                <Button 
                  onClick={handleShowAllProducts}
                  className="y2k-gradient font-semibold"
                >
                  Browse All Spirits
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 y2k-gradient opacity-10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="y2k-card p-12 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="y2k-gradient-text y2k-text-glow">
                Ready to Go Zero?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the alcohol-free revolution. Mix futuristic mocktails with our Y2K-inspired non-alcoholic spirits.
            </p>
            
            <Button 
              size="lg"
              className="y2k-gradient hover:opacity-90 transition-opacity text-background font-bold text-xl px-10 py-7 y2k-glow"
              onClick={() => {
                const section = document.getElementById('spirits');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover Flavors Now
              <Sparkles className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};