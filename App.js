// App.js
import { useEffect, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Mock data for Collections (Work, Leisure, Date outfits)
const MOCK_COLLECTIONS = [
  {
    id: '1',
    title: 'Work',
    emoji: '💼',
    items: [
       {
        type: 'pants',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200',
      },
      {
        type: 'shirt',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200',
      },
     
      {
        type: 'shoes',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200',
      },
    ],
  },
  {
    id: '2',
    title: 'Leisure',
    emoji: '🌴',
    items: [
       {
        type: 'jeans',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200',
      },
      {
        type: 'top',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200',
      },
     
      {
        type: 'sneakers',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=200',
      },
    ],
  },
  {
    id: '3',
    title: 'Date Night',
    emoji: '💕',
    items: [
      {
        type: 'dress',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200',
      },
      {
        type: 'bag',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200',
      },
      {
        type: 'heels',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200',
      },
    ],
  },
  {
    id: '4',
    title: 'Casual Weekend',
    emoji: '☀️',
    items: [
      {
        type: 'tshirt',
        image: 'https://images.unsplash.com/photo-1718252540511-e958742e4165?w=200',
      },
      {
        type: 'shorts',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200',
      },
      {
        type: 'sandals',
        image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=200',
      },
    ],
  },
];

// Mock data for Outfits (complete outfit combinations)
const MOCK_OUTFITS = [
  {
    id: '1',
    title: 'Summer Vibes',
    items: [
      { image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=150', type: 'sunglasses' },
      { image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150', type: 'top' },
      { image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200', type: 'jeans' },
      { image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=150', type: 'shoes' },
    ],
  },
  {
    id: '2',
    title: 'Business Casual',
    items: [
      { image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150', type: 'shirt' },
      { image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150', type: 'pants' },
      { image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150', type: 'shoes' }
    ],
  },
  {
    id: '3',
    title: 'Evening',
    items: [
      { image: 'https://plus.unsplash.com/premium_photo-1708276235167-7405b7fd2e93?w=150', type: 'dress' },
      { image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=150', type: 'heels' },
      { image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150', type: 'jewelry' },
    ],
  },
  {
    id: '4',
    title: 'Beach Day',
    items: [
      { image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=150', type: 'sunglasses' },
      { image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=150', type: 'swimwear' },
      { image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=150', type: 'sandals' },
      { image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150', type: 'jeans' },
    ],
  },
];

// Mock data for Individual Items
const MOCK_ITEMS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300',
    name: 'Knot Detail Knit Top',
    category: 'Crop',
    type: 'Tops',
    style: 'Casual',
    mood: 'Relaxed',
    color: 'Black',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300',
    name: 'Blue Denim Shorts',
    category: 'Denim',
    type: 'Bottoms',
    style: 'Casual',
    mood: 'Fun',
    color: 'Blue',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1746813627978-02ecacd2e572?w=300',
    name: 'Cotton Poplin Shirt',
    category: 'Striped',
    type: 'Tops',
    style: 'Formal',
    mood: 'Professional',
    color: 'Blue',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=300',
    name: 'One Piece',
    category: 'Wide Leg',
    type: 'Bottoms',
    style: 'Elegant',
    mood: 'Sophisticated',
    color: 'Red',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300',
    name: 'Dangle Earrings',
    category: 'Golden',
    type: 'Accessories',
    style: 'Elegant',
    mood: 'Glamorous',
    color: 'Gold',
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=300',
    name: 'Classic Sneakers',
    category: 'Casual',
    type: 'Shoes',
    style: 'Sporty',
    mood: 'Active',
    color: 'White',
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200',
    name: 'Vintage Jeans',
    category: 'Denim',
    type: 'Bottoms',
    style: 'Vintage',
    mood: 'Cool',
    color: 'Blue',
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300',
    name: 'Designer Sunglasses',
    category: 'Luxury',
    type: 'Accessories',
    style: 'Chic',
    mood: 'Confident',
    color: 'Black',
  },
];

const FILTER_OPTIONS = {
  type: ['All', 'Tops', 'Bottoms', 'Shoes', 'Accessories'],
  style: ['All', 'Casual', 'Formal', 'Elegant', 'Sporty', 'Vintage', 'Chic'],
  mood: ['All', 'Relaxed', 'Fun', 'Professional', 'Sophisticated', 'Glamorous', 'Active', 'Cool', 'Confident'],
  color: ['All', 'Black', 'Blue', 'Brown', 'White', 'Gold'],
};

const COLLECTION_FILTERS = ['All', 'Work', 'Leisure', 'Date Night', 'Casual Weekend'];

export default function App() {
  const [activeTab, setActiveTab] = useState('collections');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'All',
    style: 'All',
    mood: 'All',
    color: 'All',
  });
  const [selectedCollectionFilter, setSelectedCollectionFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(MOCK_ITEMS);
  const [filteredCollections, setFilteredCollections] = useState(MOCK_COLLECTIONS);
  const [slideAnim] = useState(new Animated.Value(1));
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  // Update screen width on dimension changes
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
    });

    return () => subscription?.remove();
  }, []);

  // Get effective width for layout calculations
  const getEffectiveWidth = () => {
    if (Platform.OS === 'web' && screenWidth > 500) {
      return 375; // iPhone-like width
    }
    return screenWidth;
  };

  useEffect(() => {
    // Filter items based on selected filters
    let filtered = MOCK_ITEMS;
    
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value !== 'All') {
        filtered = filtered.filter(item => item[key] === value);
      }
    });
    
    setFilteredItems(filtered);
  }, [selectedFilters]);

  useEffect(() => {
    // Filter collections
    let filtered = MOCK_COLLECTIONS;
    
    if (selectedCollectionFilter !== 'All') {
      filtered = filtered.filter(collection => collection.title === selectedCollectionFilter);
    }
    
    setFilteredCollections(filtered);
  }, [selectedCollectionFilter]);

  const handleFilterPress = (filterType, value) => {
    slideAnim.setValue(0.8);
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
    
    Animated.spring(slideAnim, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const handleCollectionFilterPress = (value) => {
    setSelectedCollectionFilter(value);
  };

  const handleTabSwitch = (tab) => {
    slideAnim.setValue(0.8);
    setActiveTab(tab);
    
    Animated.spring(slideAnim, {
      toValue: 1,
      tension: 50,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const renderFilterChips = (filterType, options, selectedValue, onPress) => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScrollContainer}
        contentContainerStyle={styles.filterContainer}
      >
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterChip,
              selectedValue === option && styles.filterChipActive,
            ]}
            onPress={() => onPress(option)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.filterChipText,
                selectedValue === option && styles.filterChipTextActive,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const renderCollectionCard = ({ item }) => (
    <Animated.View
      style={[
        styles.collectionCard,
        {
          opacity: slideAnim,
          transform: [
            {
              scale: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.collectionContent} activeOpacity={0.9}>
       
        
       <View style={styles.collectionItems}>
  {/* Left big item */}
  <View style={styles.leftItemContainer}>
    <Image
      source={{ uri: item.items[0]?.image }}
      style={[styles.collectionItemImage, { height: 220 }]} // bigger height
    />
  </View>

  {/* Right stacked items */}
  <View style={styles.rightColumn}>
    <View style={styles.rightItemContainer}>
      <Image
        source={{ uri: item.items[1]?.image }}
        style={[styles.collectionItemImage, { height: 100 }]}
      />
    </View>
    <View style={[styles.rightItemContainer, { marginBottom: 0 }]}>
      <Image
        source={{ uri: item.items[2]?.image }}
        style={[styles.collectionItemImage, { height: 100 }]}
      />
    </View>
  </View>
</View>

      </TouchableOpacity>
    </Animated.View>
  );

const renderOutfitCard = ({ item }) => {
  // find if pants/jeans exist
  const tallItemIndex = item.items.findIndex(
    (i) => i.type === 'pants' || i.type === 'jeans'
  );

  let leftTop = null;
  let leftBottom = null;
  let rightItems = [];

  if (item.items.length === 4 && tallItemIndex !== -1) {
    // 4 items with pants/jeans
    leftTop = item.items[tallItemIndex];
    leftBottom = item.items.find((_, idx) => idx !== tallItemIndex);
    rightItems = item.items.filter(
      (_, idx) =>
        idx !== tallItemIndex &&
        item.items[idx] !== leftBottom
    );
  } else if (item.items.length === 3 && tallItemIndex !== -1) {
    // 3 items with pants/jeans
    leftTop = item.items[tallItemIndex];
    rightItems = item.items.filter((_, idx) => idx !== tallItemIndex);
  } else {
    // fallback: no pants/jeans → first item left, rest right
    leftTop = item.items[0];
    rightItems = item.items.slice(1);
  }

  return (
    <Animated.View
      style={[
        styles.outfitCard,
        {
          opacity: slideAnim,
          transform: [
            {
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            },
          ],
        },
      ]}
    >
      <TouchableOpacity style={styles.outfitContent} activeOpacity={0.9}>
        <Text style={styles.outfitTitle}>{item.title}</Text>

        <View style={styles.outfitRow}>
          {/* LEFT COLUMN */}
          <View style={styles.leftColumn}>
            {leftBottom && (
              <Image
                source={{ uri: leftBottom.image }}
                style={[
                  styles.outfitItemImage,
                  { height: 100, marginTop: 8 },
                ]}
              />
            )}
             {leftTop && (
              <Image
                source={{ uri: leftTop.image }}
                style={[styles.outfitItemImage, { height: 210 }]}
              />
            )}
          </View>

          {/* RIGHT COLUMN */}
         {/* RIGHT COLUMN */}
<View style={styles.rightColumn}>
  {rightItems.map((itm, idx) => {
    // For 4 items, make both right items 150 tall
    const isFourItems = item.items.length === 4 && tallItemIndex !== -1;
    const imageHeight = isFourItems ? 150 : 100;

    return (
      <Image
        key={idx}
        source={{ uri: itm.image }}
        style={[
          styles.outfitItemImage,
          {
            height: imageHeight,
            marginBottom: idx < rightItems.length - 1 ? 8 : 0,
          },
        ]}
      />
    );
  })}
</View>

        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

 const renderItemCard = ({ item }) => {
   const effectiveWidth = getEffectiveWidth();
   // Calculate item width more responsively
   const itemWidth = effectiveWidth > 500 ? 
     Math.min((effectiveWidth - 80) / 2, 200) : // Limit max width on larger screens
     (effectiveWidth - 56) / 2;
   
   return (
  <Animated.View
    style={[
      styles.itemCard,
      { width: itemWidth }, // Dynamic width calculation
      {
        opacity: slideAnim,
        transform: [
          {
            scale: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.95, 1],
            }),
          },
        ],
      },
    ]}
  >
    <TouchableOpacity style={styles.itemContent} activeOpacity={0.9}>
      {/* Image and overlay content */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        
        {/* Bookmark button */}
        <TouchableOpacity style={styles.bookmarkButton} activeOpacity={0.7}>
          <Text style={styles.bookmarkIcon}>🔖</Text>
        </TouchableOpacity>
        
        {/* Category badge */}
        <View style={styles.categoryBadge}>
          <View style={styles.categoryIcon} />
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
      </View>
      
      {/* Item name below the card */}
      <View style={styles.itemNameContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  </Animated.View>
);
 };


  const renderCollectionsTab = () => (
    <View style={styles.tabContent}>
     
      {renderFilterChips('collection', COLLECTION_FILTERS, selectedCollectionFilter, handleCollectionFilterPress)}
      
      <FlatList
        data={filteredCollections}
        renderItem={renderCollectionCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.collectionsList}
        scrollEnabled={false}
      />
    </View>
  );

  const renderOutfitsTab = () => (
    <View style={styles.tabContent}>
      
      <FlatList
        data={MOCK_OUTFITS}
        renderItem={renderOutfitCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.outfitsList}
        scrollEnabled={false}
      />
    </View>
  );

  const renderItemsTab = () => (
    <View style={styles.tabContent}>
      {renderFilterChips('type', FILTER_OPTIONS.type, selectedFilters.type, (value) => handleFilterPress('type', value))}
      
      <Text style={styles.resultsCount}>
        {filteredItems.length} items found
      </Text>
      
      <FlatList
        data={filteredItems}
        renderItem={renderItemCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.itemRow}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.itemsList}
        scrollEnabled={false}
      />
    </View>
  );

  // Create container style based on platform and screen width
  const getContainerStyle = () => {
    if (Platform.OS === 'web' && screenWidth > 500) {
      return [
        styles.container,
        {
          width: 375,
          alignSelf: 'center',
          marginHorizontal: 'auto',
        }
      ];
    }
    
    return styles.container;
  };

  return (
    <View style={getContainerStyle()}>      
    <View style={styles.tabBarWrapper}>
  <View style={styles.tabBarCard}>
    <TouchableOpacity
      style={[styles.tabCard, activeTab === 'collections' && styles.tabCardActive]}
      onPress={() => handleTabSwitch('collections')}
      activeOpacity={0.8}
    >
      <Text style={[styles.tabCardText, activeTab === 'collections' && styles.tabCardTextActive]}>
        Collections
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.tabCard, activeTab === 'outfits' && styles.tabCardActive]}
      onPress={() => handleTabSwitch('outfits')}
      activeOpacity={0.8}
    >
      <Text style={[styles.tabCardText, activeTab === 'outfits' && styles.tabCardTextActive]}>
        Outfits
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={[styles.tabCard, activeTab === 'items' && styles.tabCardActive]}
      onPress={() => handleTabSwitch('items')}
      activeOpacity={0.8}
    >
      <Text style={[styles.tabCardText, activeTab === 'items' && styles.tabCardTextActive]}>
        Items
      </Text>
    </TouchableOpacity>
  </View>
</View>

      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {activeTab === 'collections' && renderCollectionsTab()}
        {activeTab === 'outfits' && renderOutfitsTab()}
        {activeTab === 'items' && renderItemsTab()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabBarWrapper: {
  paddingTop: 50,
  paddingHorizontal: 16,
  marginBottom: 12,
},

tabBarCard: {
  flexDirection: 'row',
  backgroundColor: '#f0f0f0',
  borderRadius: 50,
  padding: 4,
},

tabCard: {
  flex: 1,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
},

tabCardActive: {
  backgroundColor: '#ffffff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
},

tabCardText: {
  fontSize: 14,
  color: '#666666',
  fontWeight: '500',
},

tabCardTextActive: {
  color: '#000000',
  fontWeight: '600',
},  
  content: {
    flex: 1,
  },
  tabContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
    marginTop: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
    marginTop: -8,
  },
  filterScrollContainer: {
    marginBottom: 16,
  },
  filterContainer: {
    paddingRight: 20,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    minHeight: 44,
    justifyContent: 'center',
  },
  filterChipActive: {
    backgroundColor: '#f7e6de',
    borderWidth:1,
    borderColor:'#e7beadff'
  },
  filterChipText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  filterChipTextActive: {
    color: 'black',
    fontWeight: '400',
  },
  resultsCount: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    fontWeight: '500',
  },
  // Collections styles
  collectionsList: {
    paddingBottom: 20,
  },
  collectionCard: {
    marginBottom: 20,
  },
  collectionContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  collectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  collectionEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  collectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  collectionItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  collectionItemContainer: {
    width: '30%', // Use percentage instead of fixed width
  },
  collectionItemImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  collectionItems: {
  flexDirection: 'row',
  justifyContent: 'space-between',
},

leftItemContainer: {
  flex: 1,
  marginRight: 8,
},

rightColumn: {
  flex: 1,
  justifyContent: 'space-between',
},

rightItemContainer: {
  flex: 1,
  marginBottom: 8,
},

collectionItemImage: {
  width: '100%',
  height: '100%',
  borderRadius: 12,
  backgroundColor: '#f0f0f0',
},

  // Outfits styles
  outfitsList: {
    paddingBottom: 20,
  },
  outfitCard: {
    marginBottom: 20,
  },
  outfitContent: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  outfitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
  },

  /* New layout */
  outfitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    marginRight: 8,
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'space-between',
  },

  /* Image styling */
  outfitItemImage: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
  },
  // Items styles
  itemsList: {
    paddingBottom: 20,
  },
  itemRow: {
    justifyContent: 'space-between',
    marginBottom: 20, // Increased spacing between rows
  },
  itemCard: {
    // Width now handled dynamically in renderItemCard
  },
  itemContent: {
    backgroundColor: 'transparent',
  },
  imageContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    position: 'relative',
    marginBottom: 12, // Space between image and name
  },
  itemImage: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    resizeMode: 'cover',
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 32,
    height: 32,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  bookmarkIcon: {
    fontSize: 16,
  },
  categoryBadge: {
    position: 'absolute',
    bottom: 12,
    left:'30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    fontSize: 11,
    color: '#797979ff',
    fontWeight: '500',
  },
  itemNameContainer: {
    alignItems:'center'
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7d7d7dff',
    lineHeight: 20,
  },
});